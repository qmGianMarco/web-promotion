import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PromotionService } from "../../promotion.service";
import { TokenService } from "../../../token.service";
import { NbToastrService } from "@nebular/theme";

const ROUTE = "/dialogs";

@Injectable({
  providedIn: "root",
})
export class DialogsService extends PromotionService {
  constructor(
    http: HttpClient,
    tokenService: TokenService,
    nbToastrService: NbToastrService
  ) {
    super(http, tokenService, nbToastrService);
  }

  async getDialog(typeId: number, teacherId: string) {
    const route = `${ROUTE}/${typeId}/${teacherId}`;
    return await this.get(route);
  }

  async createDialog(typeId: number, teacherId: string, description: any) {
    const route = `${ROUTE}/${typeId}/${teacherId}`;
    return await this.create(
      { path: route, titleToast: "Mensaje" },
      { description }
    );
  }
}
