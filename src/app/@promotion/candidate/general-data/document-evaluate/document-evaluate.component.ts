import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { E_DOCUMENTS_GENERAL } from "../../../../utils/documents_generals";
import { E_STATUS } from "../../../../utils/status";
import { StatusService } from "../../../services/state.service";
import { FileService } from "../../../file/file.service";
import { fileMetadataDefault, FileMetaDataType } from "../../../file/file.type";

@Component({
  selector: "ngx-document-evaluate",
  styleUrls: ["./document-evaluate.component.scss"],
  templateUrl: "./document-evaluate.component.html",
})
export class DocumentEvaluateComponent implements OnChanges {
  @Input() teacherId: string;
  files: FileMetaDataType[] = [
    {
      ...fileMetadataDefault,
      name: "Ficha de Evaluación",
      typeId: E_DOCUMENTS_GENERAL.REVIEW_SHEET,
    },
    {
      ...fileMetadataDefault,
      name: "Resumen de Evaluación",
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
      const { id } = getMetaDataAll[i]?.data;
      file.id = id;
    });
  }

  async closeView() {
    await this.refreshStatement();
  }
}
