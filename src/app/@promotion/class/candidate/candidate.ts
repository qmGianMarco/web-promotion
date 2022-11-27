import { E_DOCUMENTS_GENERAL } from "../../../utils/documents_generals";
import { FileMetaDataType } from "../../file/file.type";
import { SelectPositionInput } from "../../services/candidate.service";
import { Position } from "../position";
import { CandidateType } from "./candidate.type";

export class Candidate {
  info: CandidateType;
  constructor(info: CandidateType) {
    this.info = info;
    this.setFiles();
  }

  getId() {
    return this.info.id;
  }

  getFacultyId() {
    return this.info.facultyId;
  }

  getStatusName() {
    return this.info.status || "Sin estado";
  }

  hasDocumentEvaluate() {
    return this.info.hasDocumentEvaluate;
  }

  getPosition() {
    return new Position({
      facultyId: this.info.facultyId,
      typeCandidateId: this.info.typeCandidateId,
      departamentId: this.info.departamentId,
      subjectId: this.info.subjectId,
    });
  }

  setPosition(position: SelectPositionInput) {
    this.info.typeCandidateId = position.typeCandidateId;
    this.info.departamentId = position.departamentId;
    this.info.subjectId = position.subjectId;
  }

  setFiles() {
    const candidateFiles = this.info.files;
    const files = defaultFiles.map((defaultFile) => {
      const candidateFileType = candidateFiles.find(
        (candidateFile) => candidateFile.typeId === defaultFile.typeId
      );
      return {
        ...defaultFile,
        ...candidateFileType,
        entityId: this.info.id,
      };
    });
    this.info.files = files;
  }

  getStatements() {
    return this.info.files
      .filter((file) => statementsIds.includes(file.typeId))
      .sort((a, b) => a.typeId - b.typeId);
  }

  updateFileMetadata(input: FileMetaDataType) {
    console.log("updateFileMetadata", input);
    const files = this.info.files.filter(
      (file) => file.typeId !== input.typeId
    );
    this.info.files = [...files, input];
  }
}

const statementsIds = [
  E_DOCUMENTS_GENERAL.ANEXO_1,
  E_DOCUMENTS_GENERAL.ANEXO_2,
];

const defaultFiles: { name: string; typeId: number }[] = [
  {
    name: "ANEXO 1",
    typeId: E_DOCUMENTS_GENERAL.ANEXO_1,
  },
  {
    name: "ANEXO 2",
    typeId: E_DOCUMENTS_GENERAL.ANEXO_2,
  },
];
