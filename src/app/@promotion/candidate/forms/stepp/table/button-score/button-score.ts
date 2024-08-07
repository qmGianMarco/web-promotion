import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { NbWindowService, NbWindowRef } from "@nebular/theme";
import { ViewCell } from "ng2-smart-table";
import { PermissionService } from "../../../../../services/permission.service";
import { ViewScoreComponent } from "./view-score/view-score.component";

@Component({
  selector: "ngx-button-score",
  template: `
    <button
      nbButton
      outline
      [status]="status"
      (click)="onClick()"
      [disabled]="!canSetScore"
    >
      {{ value }}
    </button>
  `,
})
export class ButtonScoreComponent implements ViewCell, OnInit {
  status: string;
  nameIcon: string;
  @Input() value: number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();
  windowsRef: NbWindowRef = null;
  canSetScore = false;

  constructor(
    private windowService: NbWindowService,
    private permissionService: PermissionService
  ) {
    this.canSetScore = this.permissionService.getCanEvaluateData();
  }
  ngOnInit() {
    this.status = this.getStatus(this.value);
  }

  getStatus(score: number): string {
    if (score === 0) {
      return "info";
    } else if (score > 0) {
      return "success";
    } else if (score < 0) {
      return "danger";
    } else {
      return "info";
    }
  }

  onClick() {
    if (this.canSetScore) {
      this.windowsRef = this.windowService.open(ViewScoreComponent, {
        title: "Puntaje",
        context: this.rowData,
        closeOnEsc: true,
      });
      this.windowsRef.onClose.subscribe(() => {
        this.save.emit("CLOSED");
      });
    } else {
      alert("No tiene permisos para asignar el puntaje");
    }
  }
}
