import {
  DepartamentType,
  Faculty,
  FacultyType,
  SubjectType,
  TypeCandidateType,
} from "../../utils/faculties";

type PositionType = {
  readonly facultyId: number;
  typeCandidateId?: number;
  departamentId?: number;
  subjectId?: number;
};

export class Position {
  info: PositionType = null;
  faculty: FacultyType = null;
  typeCandidate: TypeCandidateType = null;
  departament: DepartamentType = null;
  subject: SubjectType = null;

  constructor(info: PositionType) {
    this.info = info;
    this.setAtttributes();
  }

  setAtttributes() {
    const { facultyId, typeCandidateId, departamentId, subjectId } = this.info;
    this.faculty = Faculty.findOneById(facultyId);
    if (typeCandidateId) this.setTypeCandidate(typeCandidateId);
    if (departamentId) this.setDepartament(departamentId);
    if (subjectId) this.setSubject(subjectId);
  }

  hasPosition() {
    return this.info.subjectId > 0;
  }

  getTypesCandidate() {
    return this.faculty.typeCandidates;
  }

  setTypeCandidate(id: number) {
    this.info.typeCandidateId = id;
    this.typeCandidate = this.getTypesCandidate().find(
      (item) => item.id === this.info.typeCandidateId
    );
  }

  setDepartament(id: number) {
    this.info.departamentId = id;
    this.departament = this.getDepartaments().find(
      (item) => item.id === this.info.departamentId
    );
  }

  getDepartaments() {
    const typeCandidate = this.getTypesCandidate().find(
      (item) => item.id === this.info.typeCandidateId
    );
    return typeCandidate?.departaments;
  }

  getSubjects() {
    const departament = this.getDepartaments().find(
      (item) => item.id === this.info.departamentId
    );
    return departament?.subjects;
  }

  setSubject(id: number) {
    this.info.subjectId = id;
    this.subject = this.getSubjects().find(
      (item) => item.id === this.info.subjectId
    );
  }

  getInfoToDisplay() {
    return {
      facultyName: this.faculty.name || "",
      typeCandidate: this.typeCandidate?.name || "",
      departament: this.departament?.name || "",
      plazaCode: this.subject?.plazaCode || "",
      scheduleDedication: this.subject?.scheduleDedication || "",
      requirements: this.subject?.requirements || "",
      names: this.subject?.names || [],
    };
  }
}
