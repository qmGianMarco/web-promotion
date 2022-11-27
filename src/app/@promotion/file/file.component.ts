import { Component, OnInit } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";
import { FileService } from "./file.service";
import { FileMetaDataType } from "./file.type";

const SEP_NAME_REX = `__\\*\\*__`;

@Component({
  templateUrl: "./file.component.html",
  styleUrls: ["./file.component.scss"],
})
export class FileComponent implements OnInit {
  file: File = null;
  canDownload = false;
  canUpload = false;
  showAlert = {};
  canDisplayUpload = false;
  fileMetadata: FileMetaDataType;
  fileName = "";

  constructor(public windowRef: NbWindowRef, public fileService: FileService) {}

  ngOnInit() {
    this.fileMetadata = this.fileService._getMetadata();
    this.fileName = this.fileMetadata.url.replace(
      new RegExp(`.+${SEP_NAME_REX}`, "gi"),
      ""
    );
    this.canDownload = Boolean(this.fileMetadata.url);
    this.canDisplayUpload = true;
  }

  onChange(event) {
    this.canUpload = false;
    const file = event.target.files[0];
    const messageError = this.getMessageError(file);
    if (messageError) {
      this.showAlert = {
        message: messageError,
        status: 500,
      };
      return;
    }
    this.canUpload = true;
    this.file = file;
  }

  getMessageError = (file: File) => {
    if (file?.type.indexOf("pdf") <= -1) {
      return "El archivo debe ser PDF";
    }
    if (file?.size > 5000000) {
      return "El archivo debe ser menor a 5MB";
    }
  };

  async onUpload() {
    this.canUpload = false;
    await this.fileService.upload(this.file);
    this.close();
  }

  async onDownload() {
    const file = await this.fileService.download();
    let a = document.createElement("a");
    a.href = "data:application/pdf;base64," + file.data;
    a.target = "_blank";
    a.download = file?.name;
    a.click();
  }

  close() {
    this.windowRef.close();
  }
}
