import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { E_DOCUMENTS_GENERAL } from "../../../../utils/documents_generals";
import { E_STATUS } from "../../../../utils/status";
import { StatusService } from "../../../services/state.service";
import { FileService } from "../../../file/file.service";
import {
  Candidate,
  CandidateService,
} from "../../../shared/list-candidates/candidate.service";
import { fileMetadataDefault, FileMetaDataType } from "../../../file/file.type";

@Component({
  selector: "statements",
  styleUrls: ["./statements.component.scss"],
  templateUrl: "./statements.component.html",
})
export class StatementsComponent implements OnInit {
  @Input() teacherId: string;
  candidate: Candidate;
  hasUploadedStatements = false;
  statements: FileMetaDataType[] = [
    {
      ...fileMetadataDefault,
      name: "ANEXO 1",
      typeId: E_DOCUMENTS_GENERAL.ANEXO_1,
    },
    {
      ...fileMetadataDefault,
      name: "ANEXO 2",
      typeId: E_DOCUMENTS_GENERAL.ANEXO_2,
    },
  ];

  constructor(
    private candidateService: CandidateService,
    public fileService: FileService,
    public statusService: StatusService
  ) {}

  ngOnInit() {
    this.setAttributes();
  }

  setAttributes() {
    this.candidate = this.candidateService.getSelected();
    this.hasUploadedStatements = this.candidate.hasAllStatements;
    this.statements = this.statements.map((stm) => {
      stm.entityId = this.candidate.id;
      const file = this.candidate.files.find(
        (doc) => doc.typeFileId === stm.typeId
      );
      stm.fileId = file?.id;
      stm.url = file?.url;
      return stm;
    });
  }

  async closeView() {
    const metadataUploaded = this.fileService.getMetadataUpdloaded();
    if (!metadataUploaded) return;
    this.candidateService.updateFileMetadata(metadataUploaded);
    this.setAttributes();
  }
}
