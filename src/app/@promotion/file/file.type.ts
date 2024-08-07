export type FileMetaDataType = {
  id?: string;
  name?: string;
  url: string;
  entityId: number | string; // teacherId | facultyId
  typeId: number;
};

export const fileMetadataDefault: FileMetaDataType = {
  id: null,
  name: "",
  url: null,
  entityId: null,
  typeId: null,
}
