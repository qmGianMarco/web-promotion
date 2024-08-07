import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PromotionService } from "../promotion.service";
import { TokenService } from "../../token.service";
import { E_STAGES } from "../../utils/stages";

const ROUTE = "/stages/isIntoStage";

@Injectable({
  providedIn: "root",
})
export class StageService extends PromotionService {
  canFillData = false;
  canPreInscription = false;
  canEvaluateData = false;
  canMasterClass = false;

  constructor(http: HttpClient, tokenService: TokenService) {
    super(http, tokenService);
  }

  async getIsIntoStage(stageId: number) {
    const route = ROUTE + `/${stageId}`;
    const result = await this.get(route);
    return result?.data as boolean;
  }

  async setCanStages() {
    const [canFillData, canPreInscription, canEvaluateData, canMasterClass] =
      await Promise.all(
        [
          E_STAGES.FILL_DATA,
          E_STAGES.PRE_INSCRIPTION,
          E_STAGES.EVALUATE_DATA,
          E_STAGES.MASTER_CLASS,
        ].map((stageId) => this.getIsIntoStage(stageId))
      );

    this.canFillData = canFillData;
    this.canPreInscription = canPreInscription;
    this.canEvaluateData = canEvaluateData;
    this.canMasterClass = canMasterClass;
  }
}
