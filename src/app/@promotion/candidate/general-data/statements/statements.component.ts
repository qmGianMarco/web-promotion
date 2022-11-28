import { Component, OnInit } from "@angular/core";
import { CandidateService } from "../../../services/candidate.service";
import { FileMetaDataType } from "../../../file/file.type";
import { Candidate } from "../../../class/candidate/candidate";

@Component({
  selector: "statements",
  styleUrls: ["./statements.component.scss"],
  templateUrl: "./statements.component.html",
})
export class StatementsComponent implements OnInit {
  candidate: Candidate;
  hasUploadedStatements = false;
  statements: FileMetaDataType[] = null;

  constructor(private candidateService: CandidateService) {
    this.candidate = this.candidateService.getSelected();
  }

  ngOnInit() {
    this.setAttributes();
  }

  setAttributes() {
    this.hasUploadedStatements = this.candidate.info.hasAllStatements;
    this.statements = this.candidate.getStatements();
  }

  closeView() {
    this.candidateService.updateFilesMetadata();
    this.setAttributes();
  }
}
