import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { ItemService } from "./item.service";
import { TokenPayload, TokenService } from "../../../../../token.service";
import { IItemSetting } from "./item.interface";
import { ButtonScoreComponent } from "./button-score/button-score";
import { ButtonDocumentComponent } from "./button-document/button-document";
import { SmartTableDataDatepickerComponent } from "./smart-table-datepicker/smart-table-datepicker.component";
import { E_DOCUMENTS_GENERAL } from "../../../../../utils/documents_generals";
import { StageService } from "../../../../services/stage.service";
import { PermissionService } from "../../../../services/permission.service";
@Component({
  selector: "item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() body_item: IItemSetting;
  @Input() teacherId: string;
  srcImageDisplay: string;
  readyConfigurations = false;
  loadingAlert = {};
  user: any;

  source = [];
  sourceAux = [];
  settings: any;
  settingRol = {};
  payloadToken: TokenPayload;
  columns = {
    custom: {},
    actions: {},
    default: {},
  };
  constructor(
    public itemService: ItemService,
    private tokenService: TokenService,
    private stageService: StageService,
    private permissionService: PermissionService
  ) {
    this.payloadToken = this.tokenService.getPayload();
  }
  ngOnInit() {}

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.body_item?.currentValue.columns) {
      await this.setColumns();
      this.readyConfigurations = true;
      this.settings = {
        ...this.columns.actions,
        noDataMessage: "Sin registros para mostrar",
        columns: {
          ...this.columns.default,
          ...this.columns.custom,
        },
      };
      this.setDataTable(changes.body_item.currentValue.values);
    }
  }

  async setColumns() {
    const SCORE = {
      score: {
        title: "Puntos",
        type: "custom",
        width: "8%",
        editable: false,
        addable: false,
        filter: false,
        editor: {
          config: false,
        },
        renderComponent: ButtonScoreComponent,
        onComponentInitFunction: (instance) => {
          instance.save.subscribe((row) => {
            if (row === "CLOSED") {
              this.refresh();
            }
          });
        },
      },
    };

    const DOCUMENT = {
      button: {
        title: "Documento",
        type: "custom",
        width: "8%",
        editable: false,
        addable: false,
        filter: false,
        editor: {
          config: false,
        },
        renderComponent: ButtonDocumentComponent,
        onComponentInitFunction: (instance) => {
          instance.closeView.subscribe((row) => {
            if (row === "CLOSED") {
              this.refresh();
            }
          });
        },
      },
    };
    const WITH_ACTIONS = {
      actions: {
        columnTitle: "Acciones",
        add: true,
        edit: true,
        delete: true,
        position: "left",
        width: "10%",
      },

      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmCreate: true,
        inputClass: "new",
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmSave: true,
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
    };
    const WITHOUT_ACTIONS = {
      actions: {
        columnTitle: "Acciones",
        add: false,
        edit: false,
        delete: false,
        position: "left",
        width: "10%",
      },
    };

    this.columns.custom = DOCUMENT;
    const canEvaluateData = this.stageService.canEvaluateData;
    if (canEvaluateData) {
      this.columns.custom = {
        ...this.columns.custom,
        ...SCORE,
      };
    }
    const canDisplayAction = this.permissionService.getCanFillData();
    this.columns.actions = canDisplayAction
      ? { ...WITH_ACTIONS }
      : { ...WITHOUT_ACTIONS };

    this.columns.default = this.insertDatePicker(this.body_item.columns);
  }

  insertDatePicker(columns: any) {
    const customDatePicker = {
      editor: {
        type: "custom",
        component: SmartTableDataDatepickerComponent,
      },
    };
    if (columns.Fecha) {
      columns.Fecha = {
        ...columns.Fecha,
        ...customDatePicker,
      };
    }
    if (columns.Fecha_inicio) {
      columns.Fecha_inicio = {
        ...columns.Fecha_inicio,
        ...customDatePicker,
      };
    }
    if (columns.Fecha_fin) {
      columns.Fecha_fin = {
        ...columns.Fecha_fin,
        ...customDatePicker,
      };
    }
    return columns;
  }

  async refresh() {
    const { data } = await this.itemService.listItemForm(
      this.teacherId,
      this.body_item.id
    );
    this.setDataTable(data);
  }

  setDataTable(data: any[]) {
    this.source = data.map((item) => {
      return {
        ...item.description,
        id: item.id,
        button: item.isUploaded,
        typeId: E_DOCUMENTS_GENERAL.FORM,
        settingScore: this.body_item.score,
        fileId: item.fileId,
        score: item.score,
      };
    });
  }

  async onCreateConfirm(event) {
    let description = event.newData;
    delete description.button;
    await this.itemService.insertItemForm(
      this.teacherId,
      this.body_item.id,
      JSON.stringify(description)
    );
    this.refresh();
  }

  async onEditConfirm(event) {
    const id = event.data.id;
    let description = event.newData;
    delete description.id;
    delete description.score;
    delete description.button;
    delete description.settingScore;
    delete description.typeId;
    delete description.fileId;
    await this.itemService.updateItemForm(id, JSON.stringify(description));
    await this.refresh();
  }

  async onDeleteConfirm(event) {
    if (!window.confirm("¿Esta seguro de eliminar el registro?")) {
      event.confirm.reject();
      return;
    }
    event.confirm.resolve();
    const id = event.data.id;
    await this.itemService.deleteItemForm(id);
    await this.refresh();
  }
}
