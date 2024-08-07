import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PromotionService } from "../promotion.service";
import { TokenService } from "../../token.service";
import { NbToastrService } from "@nebular/theme";
import { LoadingService } from "../../interceptors/loading/loading.service";
import { Candidate } from "../class/candidate/candidate";
import { FileService } from "../file/file.service";

@Injectable({
  providedIn: "root",
})
export class CandidateService extends PromotionService {
  candidate: Candidate = null;

  constructor(
    http: HttpClient,
    tokenService: TokenService,
    toastService: NbToastrService,
    private loadingService: LoadingService,
    private fileService: FileService
  ) {
    super(http, tokenService, toastService);
  }

  getSelected() {
    return this.candidate;
  }

  updateFilesMetadata() {
    if (this.fileService.getIsUploaded()) {
      this.candidate.updateFileMetadata(this.fileService._getMetadata());
    }
  }

  // TODO: remove function deprecated
  getStatusIdTeacherSelected() {
    return 1;
  }

  findAll() {
    if (this.tokenService.isAdmin()) {
      return this.get("/candidates?forAdmin=true");
    }
  }

  async findAndSelect(authId: string) {
    this.loadingService.show();
    const candidate = await this.get("/candidates/" + authId);
    this.candidate = new Candidate(candidate.data);
    this.loadingService.hide();
  }

  register(candidateId: string) {
    const path = "/candidates" + "/" + candidateId + "/register";
    return this.create({ path, titleToast: "Registrar Candidato" }, null);
  }

  async selectPosition(input: SelectPositionInput) {
    const path = "/candidates/" + this.candidate.getId() + "/select-position";
    const {
      data: { hasPosition },
    } = await this.create({ path, titleToast: "Seleccionar Plaza" }, input);
    if (hasPosition) this.candidate.setPosition(input);
    return hasPosition;
  }
}

export type SelectPositionInput = {
  typeCandidateId: number;
  departamentId: number;
  subjectId: number;
};
