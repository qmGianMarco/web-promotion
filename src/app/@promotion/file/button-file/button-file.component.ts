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
import { TokenService } from "../../../token.service";
import { FileComponent } from "../file.component";
import { FileService } from "../file.service";
import { FileMetaDataType } from "../file.type";
import { buttons } from './button-file.type';

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
  @Input() rowData: FileMetaDataType;
  @Output() closeView: EventEmitter<any> = new EventEmitter();
  button = buttons["can-upload"];
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
    const isUploaded = this.rowData.url;
    if (isUploaded) {
      this.button = buttons["uploaded"];
      return;
    }
    if (!this.tokenService.isCandidate()) {
      this.button = buttons["can-not-upload"];
    }
  }

  onClick() {
    const isUploaded = Boolean(this.rowData.url);
    if (!isUploaded && !this.tokenService.isCandidate()) {
      alert("No existe archivo en este registro");
      return;
    }
    this.fileService.setMetadata(this.rowData);
    this.windowsRef = this.windowService.open(FileComponent, {
      title: this.rowData.name,
      closeOnEsc: true,
      buttons: {
        minimize: false,
        maximize: false,
        fullScreen: false,
      },
    });
    this.windowsRef.onClose.subscribe(() => {
      this.closeView.emit("CLOSED");
    });
  }
}
