import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { ItemService } from "../../../../services/item.service";
import { TokenPayload, TokenService } from "../../../../../token.service";
import { IItemSetting } from "./item.interface";
import { ButtonScoreComponent } from "./button-score/button-score";
import { SmartTableDataDatepickerComponent } from "./smart-table-datepicker/smart-table-datepicker.component";
import { E_DOCUMENTS_GENERAL } from "../../../../../utils/documents_generals";
import { StageService } from "../../../../services/stage.service";
import { PermissionService } from "../../../../services/permission.service";
import { ButtonFileComponent } from "../../../../file/button-file.component";
@Component({
  selector: "item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent implements OnChanges {
  @Input() body_item: IItemSetting;
  readyConfigurations = false;
  data = [];
  settings: any;
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

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.body_item?.currentValue.columns) {
      await this.setColumns();
      this.setDataTable(changes.body_item.currentValue.values);
    }
  }

  async setColumns() {
    this.setActionsColumns();
    this.setDocumentColumns();
    this.setScoreColumns();
    this.setDataPickerColumns();
    this.settings = {
      ...this.columns.actions,
      noDataMessage: "Sin registros para mostrar",
      columns: {
        ...this.columns.default,
        ...this.columns.custom,
      },
    };
    this.readyConfigurations = true;
  }

  setDocumentColumns() {
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
        renderComponent: ButtonFileComponent,
        onComponentInitFunction: (instance) => {
          instance.closeView.subscribe((row) => {
            if (row === "CLOSED") {
              this.refresh();
            }
          });
        },
      },
    };
    this.columns.custom = {
      ...this.columns.custom,
      ...DOCUMENT,
    };
  }

  setScoreColumns() {
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
    // const canEvaluateData = this.stageService.canEvaluateData;
    this.columns.custom = {
      ...this.columns.custom,
      ...SCORE,
    };
  }

  setActionsColumns() {
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

    // const canDisplayAction = this.permissionService.getCanFillData();
    this.columns.actions = true ? { ...WITH_ACTIONS } : { ...WITHOUT_ACTIONS };
  }

  setDataPickerColumns() {
    const columns = this.body_item.columns as any;
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
    this.columns.default = columns;
  }

  async refresh() {
    const { data } = await this.itemService.listItemForm(this.body_item.id);
    this.setDataTable(data);
  }

  setDataTable(data: any[]) {
    this.data = data.map((item) => {
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
