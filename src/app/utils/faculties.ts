import { FAUA_FACULTY } from "./data_by_faculties/faua";
import { FC_FACULTY } from "./data_by_faculties/fc";
import { FIA_FACULTY } from "./data_by_faculties/fia";
import { FIC_FACULTY } from "./data_by_faculties/fic";
import { FIEE_FACULTY } from "./data_by_faculties/fiee";
import { FIEECS_FACULTY } from "./data_by_faculties/fieecs";
import { FIGMM_FACULTY } from "./data_by_faculties/figmm";
import { FIIS_FACULTY } from "./data_by_faculties/fiis";
import { FIM_FACULTY } from "./data_by_faculties/fim";

export type SubjectType = {
  id: number;
  plazaCode: string;
  category: string;
  scheduleDedication: string;
  names: string[];
  requirements: string;
};

export type DepartamentType = {
  id: number;
  name: string;
  subjects: SubjectType[];
};

export type TypeCandidateType = {
  id: number;
  name: string;
  departaments: DepartamentType[];
};

export type FacultyType = {
  id: number;
  name: string;
  code: string;
  typeCandidates: TypeCandidateType[];
};

export const FACULTIES: FacultyType[] = [
  FC_FACULTY,
  FAUA_FACULTY,
  FIA_FACULTY,
  FIC_FACULTY,
  FIEE_FACULTY,
  FIEECS_FACULTY,
  FIM_FACULTY,
  FIGMM_FACULTY,
  FIIS_FACULTY,
];

export class Faculty {
  static getAllInfo() {
    return FACULTIES.map((faculty) => ({
      id: faculty.id,
      name: faculty.name,
      code: faculty.code,
    }));
  }

  static findOneById(id) {
    return FACULTIES.find((faculty) => faculty.id === id);
  }

  static findCodeById = (id: number) =>
    FACULTIES.find((item) => item.id === id)?.code;
}
