import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Position } from "../../class/position";
import {
  CandidateService,
  SelectPositionInput,
} from "../../services/candidate.service";

@Component({
  selector: "general-data",
  styleUrls: ["./general-data.component.scss"],
  templateUrl: "./general-data.component.html",
})
export class GeneralDataComponent implements OnInit {
  options: {
    typeCandidates: any;
    departaments: any;
    subjects: any;
  };
  flag = {
    hasDocumentEvaluate: false,
    canDisplayClaim: false,
    submitted: false,
    hasPosition: false,
  }
  position: Position;
  fg: FormGroup;
  statusName: string;
  _positionDisplay: any;

  constructor(
    private candidateService: CandidateService,
    private fb: FormBuilder
  ) {
    const candidate = this.candidateService.getSelected();
    this.statusName = candidate.getStatusName();
    this.position = candidate.getPosition();
    this.flag.hasDocumentEvaluate = candidate.info.hasDocumentEvaluate;
    this._positionDisplay = this.position.getInfoToDisplay();
  }

  ngOnInit() {
    this.flag.hasPosition = this.position.hasPosition();
    if (this.flag.hasPosition) return;

    this.fg = this.fb.group({
      typeCandidateId: [0, [Validators.required, Validators.min(1)]],
      departamentId: [0, [Validators.required, Validators.min(1)]],
      subjectId: [0, [Validators.required, Validators.min(1)]],
    });

    this.options.typeCandidates = this.position.getTypesCandidate();

    this.fg.get("typeCandidateId").valueChanges.subscribe((id) => {
      this.fg.get("departamentId").setValue(0);
      this.fg.get("subjectId").setValue(0);
      this.position.setTypeCandidate(id);
      this.options.departaments = this.position.getDepartaments();
      this._positionDisplay = this.position.getInfoToDisplay();
    });

    this.fg.get("departamentId").valueChanges.subscribe((id) => {
      this.fg.get("subjectId").setValue(0);
      this.position.setDepartament(id);
      this.options.subjects = this.position.getSubjects();
      this._positionDisplay = this.position.getInfoToDisplay();
    });

    this.fg.get("subjectId").valueChanges.subscribe((id) => {
      this.position.setSubject(id);
      this._positionDisplay = this.position.getInfoToDisplay();
    });
  }

  async onSubmit() {
    if (
      !confirm(`¿Esta seguro de posturar a la categoria ${this._positionDisplay?.plazaCode}?. 
    Esta acción solo se puede realizar una vez`)
    )
      return;
    this.flag.submitted = true;
    const position = this.fg.value as SelectPositionInput;
    this.flag.hasPosition = await this.candidateService.selectPosition(position);
    this.flag.submitted = false;
  }
}
