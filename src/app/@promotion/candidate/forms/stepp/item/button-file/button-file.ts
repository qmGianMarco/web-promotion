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
import { TokenService } from "../../../../../../token.service";
import { FileComponent } from "../../../../../file/file.component";
import { FileService } from "../../../../../file/file.service";
import { FileMetaDataType } from "../../../../../file/file.type";

@Component({
  selector: "button-file",
  template: `
    <button nbButton [status]="button.color" (click)="onClick()">
      <nb-icon [icon]="button.icon"></nb-icon>
    </button>
  `,
})
export class ButtonFileComponent implements ViewCell, OnInit, OnChanges {
  @Input() value: boolean;
  @Input() rowData: any;
  @Output() closeView: EventEmitter<any> = new EventEmitter();
  button = {
    icon: "edit-outline",
    color: "warning",
  };
  windowsRef: NbWindowRef = null;

  constructor(
    private windowService: NbWindowService,
    private tokenService: TokenService,
    private fileService: FileService
  ) {}

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
    if (!this.tokenService.isCandidate()) {
      this.button = {
        icon: "close-outline",
        color: "danger",
      };
    }
  }

  onClick() {
    let fileMetadata: FileMetaDataType;
    const isUploaded = Boolean(this.rowData.fileId);
    if (this.rowData) {
      fileMetadata = {
        name: this.rowData.name,
        entityId: this.rowData.id || this.rowData.entityId,
        typeId: this.rowData.typeId,
        fileId: this.rowData.fileId,
        url: this.rowData.url,
      };
    }

    if (!isUploaded && !this.tokenService.isCandidate()) {
      alert("No existe archivo en este registro");
      return;
    }
    this.fileService.setMetadata(fileMetadata);
    this.windowsRef = this.windowService.open(FileComponent, {
      title: fileMetadata.name,
      context: fileMetadata,
      closeOnEsc: true,
    });

    this.windowsRef.onClose.subscribe(() => {
      this.closeView.emit("CLOSED");
    });
  }
}
