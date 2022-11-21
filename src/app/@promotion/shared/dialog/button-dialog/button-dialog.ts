import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { NbWindowService, NbWindowRef } from "@nebular/theme";
import { ISettingDialog, CONFIG_CLAIM } from '../dialog.interface';
import { WindowDialogComponent } from "../window-dialog/window-dialog.component";

@Component({
  selector: "ngx-button-dialog",
  templateUrl: "./button-dialog.html",
})
export class ButtonDialogComponent implements OnChanges {
  @Input() value;
  @Input() setting: ISettingDialog;
  button = {
    icon: "edit-outline",
    color: "warning",
    text: "default"
  };
  configDialog;
  windowsRef: NbWindowRef = null;

  constructor(private windowService: NbWindowService) {}

  ngOnChanges(changes: SimpleChanges) {
    const setting = changes?.setting.currentValue;
    if (setting) {
      this.configDialog = CONFIG_CLAIM[this.setting.typeId] 
      this.button = this.configDialog?.button;
    }
  }

  onClick() {
    this.windowsRef = this.windowService.open(WindowDialogComponent, {
      title: this.configDialog?.window.title,
      context: this.setting,
      closeOnEsc: true,
    });
  }
}
