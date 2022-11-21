import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "../../token.service";
import {
  IResponse,
  PromotionService,
} from "../../@promotion/promotion.service";
import { NbToastrService } from "@nebular/theme";

const ROUTES = {
  PRE_REGISTER: {
    path: "/candidates",
    titleToast: "Pre-inscripción",
  },
  CONFIRM_PRE_REGISTER: {
    path: "/candidates/confirm-account",
  },
  REQUEST_RESET_PASSWORD: {
    path: "/auth/request-reset-password",
    titleToast: "Recuperar Cuenta",
  },
  RESET_PASSWORD: {
    path: "/auth/reset-password",
    titleToast: "Restablecer Contraseña",
  },
};

@Injectable({
  providedIn: "root",
})
export class AuthService extends PromotionService {
  constructor(
    http: HttpClient,
    tokenService: TokenService,
    toastrService: NbToastrService
  ) {
    super(http, tokenService, toastrService);
  }

  async preRegistration(user: any): Promise<IResponse> {
    return this.create(ROUTES.PRE_REGISTER, user);
  }

  async confirmAccount(user: any): Promise<IResponse> {
    return this.get(ROUTES.CONFIRM_PRE_REGISTER.path+'/'+user.token, true, 'Activar Cuenta');
  }
  
  async requestResetPassword(user: any): Promise<IResponse> {
    return this.create(ROUTES.REQUEST_RESET_PASSWORD, user);
  }

  async resetPassword(user: any): Promise<IResponse> {
    return this.create(ROUTES.RESET_PASSWORD, user);
  }
  
}
