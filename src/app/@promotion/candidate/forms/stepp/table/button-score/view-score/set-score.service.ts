import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PromotionService } from "../../../../../../promotion.service";
import { TokenService } from "../../../../../../../token.service";
import { NbToastrService } from "@nebular/theme";
const ROUTES = {
  DOCUMENTS_TEACHER_SCORE: "/evaluate/score",
};

@Injectable({
  providedIn: "root",
})
export class SetScoreService extends PromotionService {
  constructor(
    http: HttpClient,
    tokenService: TokenService,
    toastService: NbToastrService
  ) {
    super(http, tokenService, toastService);
  }

  setScoreDocumentTeacher(idRegister: number | string, payload: any) {
    const route = {
      path: `${ROUTES.DOCUMENTS_TEACHER_SCORE}/${idRegister}`,
      titleToast: "Estableciendo puntaje",
    };

    return this.update(route, payload);
  }
}
