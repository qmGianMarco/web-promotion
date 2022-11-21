import { Component, OnInit } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";
import { PermissionService } from "../services/permission.service";
import { FileService } from "./file.service";
import { FileType } from "./file.type";

@Component({
  selector: "ngx-file",
  templateUrl: "./file.component.html",
  styleUrls: ["./file.component.scss"],
})
export class FileComponent implements OnInit {
  file: File = null;
  context: any = null;
  canDownload = false;
  canUpload = false;
  showAlert = {};
  canDisplayUpload = false;
  canDisplayComponents = false;
  canViewComponents: boolean = false;
  fileMetadata: FileType;

  constructor(
    public windowRef: NbWindowRef,
    public fileService: FileService,
    private permissionService: PermissionService
  ) {}

  ngOnInit() {
    this.fileMetadata = this.fileService._getMetadata();
    this.canDownload = Boolean(this.fileMetadata.fileId);
    this.canDisplayUpload = true;
    this.canDisplayComponents = true;
  }

  onChange(event) {
    this.file = event.target.files[0];
    const isCorrectFile = this.valitateFile(this.file);
    if (isCorrectFile.valid) {
      this.canUpload = true;
    } else {
      this.canUpload = false;
      this.showAlert = {
        message: isCorrectFile.message,
        status: 500,
      };
    }
  }

  valitateFile = (file) => {
    if (file.type.indexOf("pdf") <= -1)
      return {
        valid: false,
        message: "El archivo debe ser PDF",
      };
    if (file.size <= 5000000)
      return {
        valid: true,
      };
    return {
      valid: false,
      message: "El archivo debe ser menor a 5MB",
    };
  };

  async onUpload() {
    const { isUploaded } = this.context;
    if (!isUploaded) {
      await this.fileService.uploadNewFile(this.context, this.file);
    } else {
      await this.fileService.uploadFile(this.context, this.file);
    }
    this.close();
    this.canUpload = false;
    this.canDownload = true;
  }

  async onDownload() {
    const file = await this.fileService.downloadFile(this.fileMetadata.fileId);
    let a = document.createElement("a");
    a.href = "data:application/pdf;base64," + file.data;
    a.target = "_blank";
    a.download = file?.name;
    a.click();
  }

  async onView() {
    const file = await this.fileService.downloadFile(this.fileMetadata.fileId);
    let pdfWindow = window.open("");
    pdfWindow.document.write(
      "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
        encodeURI(file.data) +
        "'></iframe>"
    );
  }

  close() {
    this.windowRef.close();
  }
}
