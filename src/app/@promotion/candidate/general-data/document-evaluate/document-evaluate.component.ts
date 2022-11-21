import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { E_DOCUMENTS_GENERAL } from "../../../../utils/documents_generals";
import { E_STATUS } from "../../../../utils/status";
import { StatusService } from "../../../services/state.service";
import { FileService } from "../../../file/file.service";

@Component({
  selector: "ngx-document-evaluate",
  styleUrls: ["./document-evaluate.component.scss"],
  templateUrl: "./document-evaluate.component.html",
})
export class DocumentEvaluateComponent implements OnChanges {
  @Input() teacherId: string;
  files = [
    {
      name: "Ficha de Evaluación",
      fileId: null,
      entityId: null,
      isUploaded: false,
      typeId: E_DOCUMENTS_GENERAL.REVIEW_SHEET,
    },
    {
      name: "Resumen de Evaluación",
      fileId: null,
      entityId: null,
      isUploaded: false,
      typeId: E_DOCUMENTS_GENERAL.SUMMARY_EVALUATE,
    },
  ];

  constructor(
    public fileService: FileService,
    public statusService: StatusService
  ) {}

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.teacherId) {
      this.teacherId = changes.teacherId.currentValue;
      this.files = this.files.map((item) => {
        item.entityId = this.teacherId;
        return item;
      });
      await this.refreshStatement();
    }
  }

  async refreshStatement() {
    const getMetaDataAll = await Promise.all(
      this.files.map((file) => this.fileService.getMetadata(file))
    );
    this.files.forEach((file, i) => {
      const { id, isUploaded } = getMetaDataAll[i]?.data;
      file.fileId = id;
      file.isUploaded = isUploaded;
    });
  }

  async closeView() {
    await this.refreshStatement();
  }
}
