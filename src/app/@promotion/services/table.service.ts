import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PromotionService } from "../promotion.service";
import { TokenService } from "../../token.service";
import { NbToastrService } from "@nebular/theme";
import { CandidateService } from "./candidate.service";
import { Candidate } from "../class/candidate/candidate";
import { RecordType, Table } from "../class/table/table";

const pathTableRecord = "/tables/records";

@Injectable({
  providedIn: "root",
})
export class TableService extends PromotionService {
  candidate: Candidate;
  tables: { [key: number]: Table } = {};

  constructor(
    http: HttpClient,
    tokenService: TokenService,
    toastrService: NbToastrService,
    private candidateService: CandidateService
  ) {
    super(http, tokenService, toastrService);
    this.candidate = this.candidateService.getSelected();
  }

  getRoute(candidateId: string, formId: number) {
    return `${pathTableRecord}/?candidateId=${candidateId}&formId=${formId}`;
  }

  listRecordsOfTable(formId: number) {
    return this.get(this.getRoute(this.candidate.getId(), formId));
  }

  async setTables() {
    const { data } = await this.get(
      `/tables/?candidateId=${this.candidate.getId()}`
    );
    for (const table of data) {
      const { id, records } = table;
      this.tables[id] = new Table(records);
    }
  }

  getTableById(id: number) {
    return this.tables[id];
  }

  createRecord(input: RecordCreateInput) {
    return this.create(
      {
        path: pathTableRecord,
        titleToast: "Insertar Registro",
      },
      {
        candidateId: this.candidate.getId(),
        ...input,
      }
    );
  }

  updateRecord(id: number, columnValue: string) {
    return this.update(
      { path: `${pathTableRecord}/${id}`, titleToast: "Actualizar Registro" },
      { columnValue }
    );
  }

  deleteRecord(id: number) {
    return this.delete({
      path: `${pathTableRecord}/${id}`,
      titleToast: "Eliminar Registro",
    });
  }
}

type RecordCreateInput = {
  columnValue: Object;
  tableId: number;
};
