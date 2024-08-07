import { Injectable } from "@angular/core";
import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";
import { E_ROLES } from "./utils/roles";
export interface TokenPayload {
  id: string;
  email: string;
  roleId: number;
  statusId: number;
  facultyId: number;
}

@Injectable({
  providedIn: "root",
})
export class TokenService {
  token: any;
  constructor(private authService: NbAuthService) {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      this.token = token;
    });
  }

  getToken() {
    return this.token;
  }

  getPayload(): TokenPayload {
    return (
      this.token.getPayload() ?? {
        id: 0,
        email: "",
        roleId: 0,
        statusId: 0,
        facultyId: 0,
      }
    );
  }

  getRoleId() {
    return this.getPayload()?.roleId;
  }

  getAuthId() {
    return this.getPayload()?.id;
  }

  isEvaluator() {
    return this.getRoleId() === E_ROLES.PRESIDENT;
  }

  isCandidate() {
    return this.getRoleId() === E_ROLES.TEACHER;
  }

  isEvaluatorClass() {
    return this.getRoleId() === E_ROLES.EVALUATOR_CLASS;
  }

  isAdmin() {
    return this.getRoleId() === E_ROLES.ADMIN;
  }
}

@Injectable({
  providedIn: "root",
})
export class RoleService {
  constructor(private tokenService: TokenService) {}

  getRoleId() {
    return this.tokenService.getPayload()?.roleId;
  }

  getId() {
    return this.tokenService.getPayload()?.id;
  }

  isPresident() {
    return this.getRoleId() === E_ROLES.PRESIDENT;
  }

  isTeacher() {
    return this.getRoleId() === E_ROLES.TEACHER;
  }

  isEvaluatorClass() {
    return this.getRoleId() === E_ROLES.EVALUATOR_CLASS;
  }
}
