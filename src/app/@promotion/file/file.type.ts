export type FileType = {
  name: string;
  fileId?: number;
  entityId: number | string; // teacherId | facultyId
  typeId: number;
  evaluatorId?: number;
};
