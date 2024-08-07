import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PromotionService } from "../promotion.service";
import { TokenService } from "../../token.service";
import { NbToastrService } from "@nebular/theme";
import { FileMetaDataType } from "./file.type";

const FILE = "/files";

@Injectable({
  providedIn: "root",
})
export class FileService extends PromotionService {
  private fileMetadata: FileMetaDataType;
  private flag = {
    isUploaded: false,
  }

  constructor(
    http: HttpClient,
    tokenService: TokenService,
    toastrService: NbToastrService
  ) {
    super(http, tokenService, toastrService);
  }

  setMetadata(fileMetadata: FileMetaDataType) {
    this.fileMetadata = fileMetadata;
    this.flag.isUploaded = false;
  }

  _getMetadata() {
    return this.fileMetadata;
  }

  getIsUploaded() {
    return this.flag.isUploaded;
  }

  // TODO: remove function deprecated
  getMetadata(metadata: FileMetaDataType) {
    return {} as any;
  }

  async upload(file: File) {
    const formData = new FormData();
    formData.append("filePdf", file);
    const { typeId, entityId, url, id } = this.fileMetadata;
    const path = `${FILE}/?typeId=${typeId}&entityId=${entityId}&url=${url}&id=${id}`;
    const response = await this.create(
      {
        path,
        titleToast: "Subir Nuevo Archivo",
      },
      formData
    );
    const data = response.data as { id: string; url: string };
    this.fileMetadata = {
      ...this.fileMetadata,
      id: data.id,
      url: data.url,
    };
    this.flag.isUploaded = true;
  }

  download() {
    const { url } = this.fileMetadata;
    return this.get(`${FILE}/?url=${url}`);
  }
}
