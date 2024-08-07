import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { NbWindowRef, NbWindowService } from "@nebular/theme";
import { LoadingService } from "../../../interceptors/loading/loading.service";
import { TokenService } from "../../../token.service";
import { E_STATUS } from "../../../utils/status";
import { PermissionService } from "../../services/permission.service";
import { StatusService } from "../../services/state.service";
import { ISettingDialog, CLAIM } from "../../shared/dialog/dialog.interface";
import { EvaluateSummaryService } from "./evaluate-summary.service";
import { GeneratePdfSummary } from "./generate-pdf-form.service";

@Component({
  selector: "evaluate-candidate",
  templateUrl: "./evaluate-candidate.component.html",
  styleUrls: ["./evaluate-candidate.component.scss"],
})
export class EvaluateCandidateComponent implements OnChanges {
  evaluatorId: string;
  canEvaluate = false;
  @Input() teacher: any = {};
  settingButtonDialog: ISettingDialog;
  canReponseClaim = false;
  canUpdateInfoClass = false;
  buttonAcceptClaim: ISettingDialog;
  buttonRejectClaim: ISettingDialog;
  windowsRef: NbWindowRef = null;

  constructor(
    private tokenService: TokenService,
    private evaluateSummaryService: EvaluateSummaryService,
    private statusService: StatusService,
    private permissionService: PermissionService,
    private generatePdfSummary: GeneratePdfSummary,
    private loadingService: LoadingService,
    private windowService: NbWindowService
  ) {
    this.evaluatorId = this.tokenService.getPayload()?.id;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentTeacher = changes.teacher.currentValue;
    if (!currentTeacher) return;
    this.teacher = currentTeacher;
    this.canUpdateInfoClass = this.permissionService.getCanUpdateInfoClass();
    this.canEvaluate = this.permissionService.getCanEvaluateData();
    if (this.canEvaluate) {
      this.settingButtonDialog = {
        teacherId: this.teacher.id,
        typeId: CLAIM.UNFIT,
      };
      return;
    }
    this.canReponseClaim = this.permissionService.getCanResponseClaim();
    if (this.canReponseClaim) {
      this.buttonAcceptClaim = {
        teacherId: this.teacher.id,
        typeId: CLAIM.ACEPTED,
      };
      this.buttonRejectClaim = {
        teacherId: this.teacher.id,
        typeId: CLAIM.REJECTED,
      };
    }
  }

  async finishEvaluation() {
    const message = `Esta seguro de finalizar la evaluación del docente ${this.teacher.dni}`;
    if (!confirm(message)) return;
    this.loadingService.show();
    await Promise.all([
      this.evaluateSummaryService.createSummary(this.teacher.id),
      this.generatePdfSummary.generatePdfForm(this.teacher.id),
    ]);
    if (this.teacher.statusId === E_STATUS.CLAIM_ACEPTED) {
      await this.statusService.updateStatus(
        this.teacher.id,
        E_STATUS.RE_EVALUATED
      );
    } else {
      await this.statusService.updateStatus(
        this.teacher.id,
        E_STATUS.EVALUATED
      );
    }
    this.loadingService.hide();
    this.canEvaluate = false;
    window.location.reload();
  }
}
