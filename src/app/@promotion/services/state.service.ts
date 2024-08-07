import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PromotionService } from "../promotion.service";
import { TokenService } from "../../token.service";
import { NbToastrService } from '@nebular/theme';

const ROUTE = "/status";

@Injectable({
  providedIn: "root",
})
export class StatusService extends PromotionService {
  constructor(
    http: HttpClient,
    tokenService: TokenService,
    toastrService: NbToastrService
  ) {
    super(http, tokenService, toastrService);
  }

  async getStatus(userId: string) {
    const route = ROUTE + `/${userId}`;
    return await this.get(route);
  }

  async updateStatus(userId: string, statusId: number) {
    const route = ROUTE + `/${userId}`;
    return await this.update({ path: route, titleToast: "Actualizar Estado" }, { statusId }, false);
  }
}
