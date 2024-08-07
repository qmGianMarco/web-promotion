import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { PermissionService } from "../../../services/permission.service";
import {
  ISettingDialog,
  CLAIM,
} from "../../../shared/dialog/dialog.interface";
import { DialogsService } from "../../../shared/dialog/dialogs.service";
@Component({
  selector: "ngx-request-claim",
  styleUrls: ["./request-claim.component.scss"],
  templateUrl: "./request-claim.component.html",
})
export class RequestClaimComponent implements OnChanges {
  @Input() teacherId: string;
  hasUploadedStatements = false;
  settingButtonDialog: ISettingDialog;
  canRequestClaim = false;
  dialogClaim = {
    unfit: "",
    request: "",
    response: "",
  };
  constructor(
    private permissionService: PermissionService,
    private dialogsService: DialogsService
  ) {}

  async ngOnChanges(changes: SimpleChanges) {
    const teacherId = changes.teacherId?.currentValue;
    if (!teacherId) return;
    this.canRequestClaim = await this.permissionService.getCanRequestClaim();
    const { data } = await this.dialogsService.getDialog(
      CLAIM.REQUEST,
      teacherId
    );
    this.dialogClaim = data?.claim;

    this.settingButtonDialog = {
      teacherId: this.teacherId,
      typeId: CLAIM.REQUEST,
    };
  }
}
