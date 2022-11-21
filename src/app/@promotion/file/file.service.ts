import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PromotionService } from "../promotion.service";
import { TokenService } from "../../token.service";
import { NbToastrService } from "@nebular/theme";
import { FileType } from "./file.type";

export interface IContex {
  name?: string;
  fileId?: number;
  entityId: number; // teacherId | facultyId
  typeId: number;
  evaluatorId?: number;
}

const ROUTES = {
  FILE: "/files",
};
@Injectable({
  providedIn: "root",
})
export class FileService extends PromotionService {
  file: FileType;
  constructor(
    http: HttpClient,
    tokenService: TokenService,
    toastrService: NbToastrService
  ) {
    super(http, tokenService, toastrService);
  }

  setMetadata(file: FileType) {
    this.file = file;
  }

  _getMetadata() {
    return this.file;
  }

  getMetadata(context: IContex) {
    const { typeId, entityId, evaluatorId = null } = context;
    const path = `${ROUTES.FILE}/${typeId}/${entityId}/${evaluatorId}`;
    return this.get(path);
  }

  uploadNewFile(context: IContex, file: File) {
    const formData = new FormData();
    formData.append("documentPdf", file);
    const { typeId, entityId } = context;
    const path = `${ROUTES.FILE}/${typeId}/${entityId}`;
    return this.create(
      {
        path,
        titleToast: "Subir Nuevo Archivo",
      },
      formData
    );
  }

  uploadFile(context: IContex, file: File) {
    const formData = new FormData();
    formData.append("documentPdf", file);
    return this.update(
      {
        path: ROUTES.FILE + "/" + context.fileId,
        titleToast: "Actualizar Archivo",
      },
      formData
    );
  }

  downloadFile(fileId: number) {
    const path = ROUTES.FILE + "/" + fileId;
    return this.get(path);
  }
}
