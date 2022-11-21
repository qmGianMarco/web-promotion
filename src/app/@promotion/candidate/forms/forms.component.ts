import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { StatusService } from "../../services/state.service";
import { E_STATUS } from "../../../utils/status";
import { LoadingService } from "../../../interceptors/loading/loading.service";
import { ItemService } from './stepp/item/item.service';
@Component({
  selector: "forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"],
})
export class FormsComponent implements OnChanges {
  @Input() teacherId: string;
  data: any;
  canDisplayForms = true;
  loadingForms = false;
  canDisplayAlert = false;
  constructor(
    private statusService: StatusService,
    private itemService: ItemService
  ) {}

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.teacherId.currentValue) {
      const {
        data: { statusId },
      } = await this.statusService.getStatus(this.teacherId);
      if (statusId >= E_STATUS.COMPLETED_STATEMENTS) {
        await this.getStructureFicha();
      }
    }
  }
  async getStructureFicha() {
    this.loadingForms = true;
    this.canDisplayForms = false;
    const result = await this.itemService.getAllFormComplete(this.teacherId);
    this.data = result.data;
    if (result.data) {
      this.canDisplayAlert = false;
      this.canDisplayForms = true;
    }
    this.loadingForms = false;
  }
}
