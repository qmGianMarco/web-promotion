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
import { FileType } from "../../../file/file.type";

@Component({
  selector: "statements",
  styleUrls: ["./statements.component.scss"],
  templateUrl: "./statements.component.html",
})
export class StatementsComponent implements OnInit {
  @Input() teacherId: string;
  candidate: Candidate;
  hasUploadedStatements = false;
  statements: FileType[] = [
    {
      name: "ANEXO 1",
      fileId: null,
      entityId: null,
      typeId: E_DOCUMENTS_GENERAL.ANEXO_1,
    },
    {
      name: "ANEXO 2",
      fileId: null,
      entityId: null,
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
      return stm;
    });
  }

  async closeView() {}
}
