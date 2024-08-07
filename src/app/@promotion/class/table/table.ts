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

  addColumnValue(record: RecordType) {
    this.records.push(record);
  }

  deleteColumnValue(id: number) {
    this.records = this.records.filter((record) => record.id !== id);
  }

  updateColumnValue(id: number, columnValue: Object) {
    const record = this.records.find((record) => record.id === id);
    if (record) {
      record.columnValue = columnValue;
    }
  }
}
