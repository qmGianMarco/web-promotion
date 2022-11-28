import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from "@angular/common/http";
import { environment } from "../../environments/environment";
import { TokenService } from "../token.service";
import { Observable, lastValueFrom } from "rxjs";
import { NbToastrService } from "@nebular/theme";
export interface IResponse {
  message: string;
  data?: any;
  status: number;
  name?: string;
  titleToast?: string;
}
export const getStatusToastByHttpStatus = (number: number) => {
  if (number >= 200 && number < 400) {
    return "success";
  } else if (number >= 400 && number < 500) {
    return "warning";
  } else if (number >= 500) {
    return "danger";
  } else {
    return "danger";
  }
};

@Injectable({
  providedIn: "root",
})
export class PromotionService {
  constructor(
    public http: HttpClient,
    public tokenService: TokenService,
    public toastrService?: NbToastrService
  ) {}
  request(
    method: string,
    url: string,
    data?: any,
    responseType?: any
  ): Observable<object> {
    const token = this.tokenService.getToken();
    const urlEnv = environment.baseUrl + url;
    return this.http.request(method, urlEnv, {
      body: data,
      responseType: responseType || "json" || "aplication/pdf",
      observe: "response",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  refactorResponse(
    response: HttpResponse<any>,
    showToast = false,
    titleToast: string
  ): IResponse {
    const newResponse = {
      message: response.body.message,
      data: response.body.data,
      name: response.body.name,
      status: response.status,
      titleToast,
    };
    if (showToast) this.showToastResponse(newResponse);
    return newResponse;
  }

  refactorErrorResponse(
    response: HttpErrorResponse,
    showToast = false,
    titleToast: string
  ): IResponse {
    const newResponse = {
      message: response?.error?.message,
      status: response.status,
      titleToast,
    };
    if (showToast) this.showToastResponse(newResponse);
    return newResponse;
  }

  showToastResponse(response: IResponse) {
    this.toastrService.show(
      response.message || "Error Interno, intente de nuevo mas tarde",
      response.titleToast,
      {
        status: getStatusToastByHttpStatus(response.status),
        destroyByClick: true,
        duration: 4000,
        preventDuplicates: true,
      }
    );
  }

  async create(route, payload, showToast = true): Promise<IResponse> {
    try {
      const response = await lastValueFrom(
        this.request("POST", route.path, payload)
      );
      return this.refactorResponse(
        response as any,
        showToast,
        route.titleToast
      );
    } catch (error) {
      return this.refactorErrorResponse(
        error,
        showToast,
        route.titleToast
      );
    }
  }

  async update(route, payload, showToast = true): Promise<IResponse> {
    try {
      const response = await lastValueFrom(
        this.request("PUT", route.path, payload)
      );
      return this.refactorResponse(
        response as any,
        showToast,
        route.titleToast
      );
    } catch (error) {
      return this.refactorErrorResponse(
        error,
        showToast,
        route.titleToast
      );
    }
  }

  async delete(route): Promise<IResponse> {
    try {
      const response = await lastValueFrom(this.request("DELETE", route.path));
      return this.refactorResponse(response as any, true, route.titleToast);
    } catch (error) {
      return this.refactorErrorResponse(error, true, route.titleToast);
    }
  }

  async get(route, showToast = false, titleToast = ""): Promise<IResponse> {
    try {
      const response = await lastValueFrom(this.request("GET", route));
      return this.refactorResponse(response as any, showToast, titleToast);
    } catch (error) {
      return this.refactorErrorResponse(error, showToast, titleToast);
    }
  }
}
