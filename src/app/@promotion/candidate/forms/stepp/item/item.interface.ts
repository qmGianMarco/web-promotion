export interface IItemSetting {
  id: number;
  item: string;
  columns: Object;
  score: Object;
  values: any[];
}

export interface IItemCreate {
  itemDescription: Object;
}

export interface IItemPatch {
  teacherDocumentId: number;
  itemDescription: Object;
}
