import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PromotionService } from "../promotion.service";
import { TokenService } from "../../token.service";
import { NbToastrService } from "@nebular/theme";
import { LoadingService } from '../../interceptors/loading/loading.service';

@Injectable({
  providedIn: "root",
})
export class CandidateService extends PromotionService {
  teacherSelected: any = null;
  candidateSelected: Candidate = null;

  constructor(
    http: HttpClient,
    tokenService: TokenService,
    toastService: NbToastrService,
    private loadingService: LoadingService
  ) {
    super(http, tokenService, toastService);
  }

  getSelected() {
    return this.candidateSelected;
  }

  getStatusIdTeacherSelected() {
    return this.teacherSelected?.statusId;
  }

  updateFileMetadata(input: FilesCandidate) {
    const files = this.candidateSelected.files.filter(
      (file) => file.id !== input.id
    );
    this.candidateSelected.files = [...files, input];
  }

  findAll() {
    if (this.tokenService.isAdmin()) {
      return this.get("/candidates?forAdmin=true");
    }
  }

  async findAndSelect(authId: string) {
    this.loadingService.show();
    const candidate = await this.get("/candidates/" + authId);
    this.candidateSelected = candidate.data;
    this.loadingService.hide();
  }

  register(candidateId: string) {
    const path = "/candidates" + "/" + candidateId + "/register";
    return this.create({ path, titleToast: "Registrar Candidato" }, null);
  }

  selectPosition(input: SelectPositionInput) {
    const { candidateId, ...rest } = input;
    const path = "/candidates/" + candidateId + "/select-position";
    return this.create({ path, titleToast: "Seleccionar Plaza" }, rest);
  }

  findFiles() {
    const candidateId = this.candidateSelected.id;
    return this.get(`/candidates/${candidateId}/files`);
  }
}

interface SelectPositionInput {
  candidateId: string;
  typeCandidateId: number;
  departamentId: number;
  subjectId: number;
}

export type Candidate = {
  id: string;
  userId: string;
  codeUni: string;
  typeCandidateId: number | null;
  departamentId: number | null;
  subjectId: number | null;
  score: number;
  approved: boolean;
  statusId: number | null;
  email?: string;
  names: string;
  dni: string;
  status?: string;
  codeFaculty: string;
  facultyId: number;
  hasAllStatements: boolean;
  hasDocumentEvaluate: boolean;
  files: FilesCandidate[];
};

export type FilesCandidate = {
  id: number;
  typeFileId: number;
  url: string;
};
