import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PromotionService } from "../promotion.service";
import { TokenService } from "../../token.service";
import { NbToastrService } from "@nebular/theme";
import { FileMetaDataType } from "./file.type";
import { FilesCandidate } from '../services/candidate.service';

const FILE = "/files";

@Injectable({
  providedIn: "root",
})
export class FileService extends PromotionService {
  private fileMetadata: FileMetaDataType;
  private fileMetadataUploaded: FilesCandidate;

  constructor(
    http: HttpClient,
    tokenService: TokenService,
    toastrService: NbToastrService
  ) {
    super(http, tokenService, toastrService);
  }

  setMetadata(fileMetadata: FileMetaDataType) {
    this.fileMetadata = fileMetadata;
  }

  _getMetadata() {
    return this.fileMetadata;
  }

  getMetadataUpdloaded() {
    return this.fileMetadataUploaded;
  }

  // TODO: remove function deprecated
  getMetadata(metadata: FileMetaDataType) {
    const { typeId, entityId, evaluatorId = null } = metadata;
    const path = `${FILE}/${typeId}/${entityId}/${evaluatorId}`;
    return this.get(path);
  }

  async upload(file: File) {
    const formData = new FormData();
    formData.append("filePdf", file);
    const { typeId, entityId, url, fileId } = this.fileMetadata;
    const path = `${FILE}/?typeId=${typeId}&entityId=${entityId}&url=${url}&id=${fileId}`;
    const response = await this.create(
      {
        path,
        titleToast: "Subir Nuevo Archivo",
      },
      formData
    );
    this.fileMetadataUploaded = response.data as FilesCandidate;
  }

  download() {
    const { url } = this.fileMetadata;
    return this.get(`${FILE}/?url=${url}`);
  }
}
