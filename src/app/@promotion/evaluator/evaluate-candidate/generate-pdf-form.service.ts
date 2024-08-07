import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PromotionService } from "../../promotion.service";
import { TokenService } from "../../../token.service";

const ROUTE = "/evaluate/document-summary";

@Injectable({
  providedIn: "root",
})
export class GeneratePdfSummary extends PromotionService {
  constructor(http: HttpClient, tokenService: TokenService) {
    super(http, tokenService);
  }

  async generatePdfForm(teacherId: string) {
    const route = ROUTE + `/${teacherId}`;
    return await this.create({ path: route }, {}, false);
  }
}
