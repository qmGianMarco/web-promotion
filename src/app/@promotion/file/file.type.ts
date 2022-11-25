export type FileMetaDataType = {
  name?: string;
  fileId?: number;
  url: string;
  entityId: number | string; // teacherId | facultyId
  typeId: number;
  evaluatorId?: number;
};

export const fileMetadataDefault: FileMetaDataType = {
  name: "",
  fileId: null,
  url: null,
  entityId: null,
  typeId: null,
}
