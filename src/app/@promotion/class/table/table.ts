export type RecordType = {
  id: number;
  columnValue: Object;
  score: number;
  url: string;
};

export class Table {
  records: RecordType[] | null;

  constructor(records: RecordType[]) {
    this.records = records;
  }

  getColumnsValues() {
    return this.records.map((record) => ({
      ...record.columnValue,
      id: record.id,
      score: record.score,
      button: record.url,
    }));
  }
}
