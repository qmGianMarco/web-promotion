import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { NbWindowRef } from "@nebular/theme";
import { StatusService } from "../../../services/state.service";
import { CONFIG_CLAIM, ISettingDialog, CLAIM } from "../dialog.interface";
import { DialogsService } from "../dialogs.service";

@Component({
  selector: "ngx-window-dialog",
  templateUrl: "./window-dialog.component.html",
  styleUrls: ["./window-dialog.component.scss"],
})
export class WindowDialogComponent {
  context: ISettingDialog;
  fg = this.fb.group({
    description: ["", Validators.required],
  });
  constructor(
    public windowRef: NbWindowRef,
    private fb: FormBuilder,
    private statusService: StatusService,
    public dialogsService: DialogsService
  ) {
    this.context = windowRef.config.context as ISettingDialog;
  }

  async ngSubmit() {
    const { typeId, teacherId } = this.context;
    let description = this.fg.value.description;
    if (!confirm(CONFIG_CLAIM[typeId].window.confirm)) {
      return;
    }
    const promises = this.getPromises({
      description,
      typeId,
      teacherId,
    });

    await Promise.all(promises);
    window.location.reload();
  }

  getPromises(parms: {
    description: string;
    typeId: number;
    teacherId: string;
  }) {
    const { description, typeId, teacherId } = parms;
    const descriptionJson = JSON.stringify({
      [CONFIG_CLAIM[typeId].messageId]: description,
    });
    return [
      this.dialogsService.createDialog(typeId, teacherId, descriptionJson),
      this.statusService.updateStatus(
        teacherId,
        CONFIG_CLAIM[typeId].setStatus
      ),
    ];
  }
  close() {
    this.windowRef.close();
  }
}
