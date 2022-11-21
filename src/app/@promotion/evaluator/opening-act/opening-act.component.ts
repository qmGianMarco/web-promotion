import { Component, OnInit } from "@angular/core";
import { AuthEvaluateService } from "./opening-act.service";
import { TokenService } from "../../../token.service";
import { settingByStatus } from "./opening-act.interface";
import { E_ROLES, ROLES } from "../../../utils/roles";
import { FileService } from "../../file/file.service";
import { E_DOCUMENTS_GENERAL } from "../../../utils/documents_generals";
@Component({
  selector: "opening-act",
  templateUrl: "./opening-act.component.html",
  styleUrls: ["./opening-act.component.scss"],
})
export class OpeningActComponent implements OnInit {
  setting = settingByStatus.authorize;
  evaluators: any;
  tokenPayload: any;
  canCreateActa = false;
  fileActa = {
    fileId: null,
    entityId: null,
    isUploaded: false,
    typeId: E_DOCUMENTS_GENERAL.OPENING_ACT,
  };

  constructor(
    private authEvaluateService: AuthEvaluateService,
    private tokenService: TokenService,
    private fileService: FileService
  ) {
    this.tokenPayload = this.tokenService.getPayload();
    this.fileActa.entityId = this.tokenPayload.facultyId;
  }

  async ngOnInit() {
    await this.authEvaluateService.initService();
    await this.getAuthCommission();
  }

  async getAuthCommission() {
    const { id, facultyId, roleId } = this.tokenPayload;
    const authorizers = this.authEvaluateService.getAuthorizers();
    if (!authorizers) return;
    this.evaluators = authorizers.map((evaluator) => {
      return {
        role: ROLES[evaluator.roleId].name,
        completeName: `${evaluator.name} ${evaluator.surname} ${evaluator.motherSurname}`,
        hasAuthorizedEvaluate: evaluator.hasAuthorizedEvaluate,
      };
    });

    const hasAuth = authorizers.find(
      (item) => item.id === id
    )?.hasAuthorizedEvaluate;
    if (!hasAuth) {
      this.setting = settingByStatus.authorize;
      return;
    }
    const isAuthorized = this.authEvaluateService.isAuthorized();
    if (!isAuthorized) {
      this.setting = settingByStatus.expect;
      return;
    }

    const resultFile = await this.fileService.getMetadata({
      entityId: facultyId,
      typeId: E_DOCUMENTS_GENERAL.OPENING_ACT,
    });
    this.fileActa.fileId = resultFile.data.id;
    this.fileActa.isUploaded = resultFile.data.isUploaded;
    if (!this.fileActa.isUploaded) {
      this.setting = settingByStatus.generate;
      this.canCreateActa = roleId === E_ROLES.PRESIDENT;
      return;
    }
    this.setting = settingByStatus.to_select;
    this.authEvaluateService.authorized = true;
  }

  async onAuthorizeActa() {
    await this.authEvaluateService.authorize();
    this.getAuthCommission();
  }

  onReloadAuth() {
    this.getAuthCommission();
  }

  async onCreateActa() {
    await this.authEvaluateService.createActa();
    this.authEvaluateService.authorized = true;
    this.onReloadAuth();
  }
}
