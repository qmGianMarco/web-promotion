import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { NbWindowService, NbWindowRef } from "@nebular/theme";
import { ViewCell } from "ng2-smart-table";
import { TokenPayload, TokenService } from "../../../../../../token.service";
import { E_ROLES } from "../../../../../../utils/roles";
import { FileComponent } from "../../../../../file/file.component";
import { FileService } from "../../../../../file/file.service";
import { FileType } from "../../../../../file/file.type";

@Component({
  selector: "button-document",
  templateUrl: "./button-document.html",
})
export class ButtonDocumentComponent implements ViewCell, OnInit, OnChanges {
  @Input() value;
  @Input() rowData: any;
  @Output() closeView: EventEmitter<any> = new EventEmitter();
  payloadToken: TokenPayload;
  button = {
    icon: "edit-outline",
    color: "warning",
  };
  windowsRef: NbWindowRef = null;

  constructor(
    private windowService: NbWindowService,
    private tokenService: TokenService,
    private fileService: FileService
  ) {
    this.payloadToken = this.tokenService.getPayload();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value) {
      this.setButton();
    }
  }

  ngOnInit() {
    this.setButton();
  }

  setButton() {
    const isUploaded = this.rowData.fileId;
    if (isUploaded) {
      this.button = {
        icon: "done-all-outline",
        color: "success",
      };
      return;
    }
    if (this.payloadToken.roleId !== E_ROLES.TEACHER) {
      this.button = {
        icon: "close-outline",
        color: "danger",
      };
    }
  }

  onClick() {
    let file: FileType;
    const isUploaded = this.rowData.fileId;
    if (isUploaded !== undefined && this.rowData) {
      file = {
        name: this.rowData.name,
        entityId: this.rowData.id || this.rowData.entityId,
        typeId: this.rowData.typeId,
        fileId: this.rowData.fileId,
      };
    }

    if (!isUploaded && this.payloadToken.roleId !== E_ROLES.TEACHER) {
      alert("No existe archivo en este registro");
      return;
    }

    this.fileService.setMetadata(file);
    this.windowsRef = this.windowService.open(FileComponent, {
      title: file.name,
      context: file,
      closeOnEsc: true,
    });

    this.windowsRef.onClose.subscribe(() => {
      this.closeView.emit("CLOSED");
    });
  }
}
