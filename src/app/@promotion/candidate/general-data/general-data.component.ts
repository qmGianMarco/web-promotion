import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Faculty } from "../../../../assets/data/faculties";
import {
  Candidate,
  CandidateService,
} from "../../shared/list-candidates/candidate.service";

@Component({
  selector: "general-data",
  styleUrls: ["./general-data.component.scss"],
  templateUrl: "./general-data.component.html",
})
export class GeneralDataComponent implements OnInit {
  hasCategory = false;
  typeTeachers: any;
  departaments: any;
  subjects: any;
  subjectSelected: any;
  submitted = false;
  canDisplayClaim = false;
  faculty;
  status: string;
  candidate: Candidate;
  fg: FormGroup;

  constructor(
    private candidateService: CandidateService,
    private fb: FormBuilder
  ) {
    this.candidate = this.candidateService.getSelected();
    this.faculty = Faculty.findOneById(this.candidate.facultyId);
    this.typeTeachers = this.faculty.typeTeachers;
    this.hasCategory = this.candidate?.subjectId > 0;
    if (this.hasCategory) {
      this.getInfoSubjectSelected();
      return;
    }
    this.fg = this.fb.group({
      typeCandidateId: [0, [Validators.required, Validators.min(1)]],
      departamentId: [0, [Validators.required, Validators.min(1)]],
      subjectId: [0, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {
    if (this.hasCategory) return;

    this.fg.get("typeCandidateId").valueChanges.subscribe((id) => {
      this.fg.get("departamentId").setValue(0);
      this.fg.get("subjectId").setValue(0);
      const typeTeacher = Faculty.getAttributes(this.typeTeachers, id);
      this.departaments = typeTeacher?.departaments;
      this.subjectSelected = {
        ...this.subjectSelected,
        typeTeacher: typeTeacher?.name || "",
      };
    });

    this.fg.get("departamentId").valueChanges.subscribe((id) => {
      this.fg.get("subjectId").setValue(0);
      const departament = Faculty.getAttributes(this.departaments, id);
      this.subjects = departament?.subjects;
      this.subjectSelected = {
        ...this.subjectSelected,
        departament: departament?.name || "",
      };
    });

    this.fg.get("subjectId").valueChanges.subscribe((id) => {
      this.subjectSelected = {
        ...this.subjectSelected,
        ...Faculty.getAttributes(this.subjects, id),
      };
    });
  }

  getInfoSubjectSelected() {
    const typeTeacher = Faculty.getAttributes(
      this.typeTeachers,
      this.candidate.typeCandidateId
    );
    const departament = Faculty.getAttributes(
      typeTeacher?.departaments,
      this.candidate.departamentId
    );
    const subject = Faculty.getAttributes(
      departament?.subjects,
      this.candidate.subjectId
    );
    this.subjectSelected = {
      typeTeacher: typeTeacher?.name || "",
      departament: departament?.name || "",
      ...subject,
    };
  }

  async onSubmit() {
    if (
      !confirm(`¿Esta seguro de posturar a la categoria ${this.subjectSelected?.plazaCode}?. 
    Esta acción solo se puede realizar una vez`)
    )
      return;
    this.submitted = true;
    const data = this.fg.value;
    const {
      data: { hasCategory },
    } = await this.candidateService.selectPosition({
      candidateId: this.candidate.id,
      typeCandidateId: data.typeCandidateId,
      departamentId: data.departamentId,
      subjectId: data.subjectId,
    });
    this.hasCategory = hasCategory;
    this.submitted = false;
  }
}
