import { Injectable } from "@angular/core";
import { RoleService, TokenService } from "../../token.service";
import { E_STATUS } from "../../utils/status";
import { AuthEvaluateService } from '../evaluator/opening-act/opening-act.service';
import { CandidateService } from './candidate.service';
import { StageService } from "./stage.service";
import { StatusService } from "./state.service";

@Injectable({
  providedIn: "root",
})
export class PermissionService {
  constructor(
    private tokenService: TokenService,
    private authEvaluateService: AuthEvaluateService,
    private listTeacherService: CandidateService,
    private stageService: StageService,
    private statusService: StatusService,
    private roleService: RoleService
  ) {}

  getCanEvaluateData() {
    return (
      this.roleService.isPresident() &&
      // this.authEvaluateService.authorized &&
      [E_STATUS.COMPLETED_STATEMENTS, E_STATUS.CLAIM_ACEPTED].includes(
        this.listTeacherService.getStatusIdTeacherSelected()
      ) &&
      this.stageService.canEvaluateData
    );
  }

  getCanResponseClaim() {
    return (
      this.roleService.isPresident() &&
      this.listTeacherService.getStatusIdTeacherSelected() ===
        E_STATUS.CLAIM_REQUEST &&
      this.stageService.canEvaluateData
    );
  }

  getCanFillData() {
    return this.stageService.canFillData && this.roleService.isTeacher();
  }

  getCanUpdateInfoClass() {
    return this.roleService.isPresident() && this.stageService.canMasterClass;
  }

  async getCanRequestClaim() {
    const teacherStatusId = await this.getTeacherStatusId();
    return (
      this.stageService.canEvaluateData &&
      this.roleService.isTeacher() &&
      [E_STATUS.EVALUATED, E_STATUS.UNFIT].includes(teacherStatusId)
    );
  }

  async getCanDisplayClaim() {
    const teacherStatusId = await this.getTeacherStatusId();
    return teacherStatusId >= E_STATUS.UNFIT;
  }

  async getCanElavuateClass() {
    const teacherStatusId = await this.getTeacherStatusId();
    const bool =
      this.roleService.isEvaluatorClass() &&
      this.stageService.canMasterClass &&
      [
        E_STATUS.EVALUATED,
        E_STATUS.CLAIM_REJECTED,
        E_STATUS.RE_EVALUATED
      ].includes(teacherStatusId);
    return bool;
  }

  async getTeacherStatusId() {
    if (!this.roleService.isTeacher()) {
      return this.listTeacherService.getStatusIdTeacherSelected();
    } else {
      const { data } = await this.statusService.getStatus(this.getTokenId());
      return data.statusId;
    }
  }

  getTokenId() {
    return this.tokenService.getPayload()?.id;
  }
}
