import { Component } from "@angular/core";
import { StatusService } from "../../services/state.service";
import { E_STATUS } from "../../../utils/status";
import { TableService } from "../../services/table.service";
import { FICHA } from "../../../utils/ficha";
@Component({
  selector: "forms",
  templateUrl: "./forms.component.html",
})
export class FormsComponent {
  forms: any;
  canDisplayForms = false;
  loadingForms = true;

  constructor(
    private statusService: StatusService,
    private tableServices: TableService
  ) {}

  async ngOnInit() {
    this.forms = FICHA;
    await this.fetchFormsInService();

    // if (changes.teacherId.currentValue) {
    //   const {
    //     data: { statusId },
    //   } = await this.statusService.getStatus(this.teacherId);
    //   if (statusId >= E_STATUS.COMPLETED_STATEMENTS) {

    //   }
    // }
  }

  async fetchFormsInService() {
    await this.tableServices.setTables();
    this.canDisplayForms = true;
    this.loadingForms = false;
  }
}
