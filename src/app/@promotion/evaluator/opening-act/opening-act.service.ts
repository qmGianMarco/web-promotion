import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PromotionService } from "../../promotion.service";
import { TokenService } from "../../../token.service";
import { NbToastrService } from "@nebular/theme";

const ROUTES = {
  AUTH_EVALUATE: "/evaluate/authorize",
  ACTA_EVALUATE: "/evaluate/acta",
};
const NUM_MIN_CORUM = 5;

@Injectable({
  providedIn: "root",
})
export class AuthEvaluateService extends PromotionService {
  authorized = false;
  authorizers = undefined;
  constructor(
    http: HttpClient,
    tokenService: TokenService,
    toastrService: NbToastrService
  ) {
    super(http, tokenService, toastrService);
  }

  authorize() {
    return this.create(
      { path: ROUTES.AUTH_EVALUATE, titleToast: "Autorizar Evaluación" },
      null
    );
  }

  async initService() {
    if (this.authorizers) return this.authorizers;
    const result = await this.get(ROUTES.AUTH_EVALUATE);
    this.authorizers = result?.data;
  }

  getAuthorizers() {
    return this.authorizers;
  }

  isAuthorized() {
    const countAuth =
      this.authorizers.filter((authorizer) => authorizer.hasAuthorizedEvaluate === 1)
        ?.length ?? 0;
    return countAuth >= NUM_MIN_CORUM;
  }

  createActa() {
    return this.create(
      { path: ROUTES.ACTA_EVALUATE, titleToast: "Crear Acta" },
      null
    );
  }
}
