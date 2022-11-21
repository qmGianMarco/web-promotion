import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PromotionService } from "../../../../promotion.service";
import { TokenService } from "../../../../../token.service";
import { NbToastrService } from "@nebular/theme";

const ROUTES = {
  FORM: "/forms",
};
@Injectable({
  providedIn: "root",
})
export class ItemService extends PromotionService {
  constructor(
    http: HttpClient,
    tokenService: TokenService,
    toastrService: NbToastrService
  ) {
    super(http, tokenService, toastrService);
  }

  getRoute(teacherId: string, formId: number) {
    return `${ROUTES.FORM}/${teacherId}/${formId}`;
  }

  listItemForm(teacherId: string, formId: number) {
    return this.get(this.getRoute(teacherId, formId));
  }

  insertItemForm(teacherId: string, formId: number, description: string) {
    return this.create(
      {
        path: this.getRoute(teacherId, formId),
        titleToast: "Insertar Registro",
      },
      { description }
    );
  }

  updateItemForm(id: number, description: string) {
    return this.update(
      { path: `${ROUTES.FORM}/${id}`, titleToast: "Actualizar Registro" },
      { description }
    );
  }

  deleteItemForm(id: number) {
    return this.delete({
      path: `${ROUTES.FORM}/${id}`,
      titleToast: "Eliminar Registro",
    });
  }
  
  getAllFormComplete = (teacherId: string) => {
    return this.get(`${ROUTES.FORM}/${teacherId}`);
  }
}
