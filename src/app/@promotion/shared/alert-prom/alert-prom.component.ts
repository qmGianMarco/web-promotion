import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { ISettingAlerterProm } from "./alert.interface";

@Component({
  selector: "ngx-alert-prom",
  templateUrl: "./alert-prom.html",
})
export class AlertPromComponent implements OnInit, OnChanges {
  @Input() settings: ISettingAlerterProm;
  display: boolean = false;
  status: number;
  message: string;

  constructor() {}
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.settings.currentValue.status) {
      this.status = this.settings.status;
      this.message = this.settings.message;
      this.display = true;
      setTimeout(() => (this.display = false), 5000);
    }
  }
}
