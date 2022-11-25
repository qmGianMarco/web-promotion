import { Component } from "@angular/core";
import { StatusService } from "../../services/state.service";
import { E_STATUS } from "../../../utils/status";
import { ItemService } from "../../services/item.service";
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
    private itemService: ItemService
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
    await this.itemService.getAllFormComplete();
    this.canDisplayForms = true;
    this.loadingForms = false;
  }
}
