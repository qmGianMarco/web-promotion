import { FileMetaDataType } from '../../file/file.type';

export type CandidateType = {
  id: string;
  userId: string;
  codeUni: string;
  typeCandidateId: number | null;
  departamentId: number | null;
  subjectId: number | null;
  score: number;
  approved: boolean;
  statusId: number | null;
  email?: string;
  names: string;
  dni: string;
  status?: string;
  codeFaculty: string;
  facultyId: number;
  hasAllStatements: boolean;
  hasDocumentEvaluate: boolean;
  files: FileMetaDataType[];
};