import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

@Component({
  template: `
    <input
      [ngClass]="inputClass"
      [(ngModel)]="inputModel"
      [disabled]="!cell.isEditable()"
      [placeholder]="cell.getTitle()"
      nbInput
      [nbDatepicker]="dateTimePicker"
    />

    <nb-datepicker
      #dateTimePicker
      (dateChange)="handleDateChange($event)"
    ></nb-datepicker>
  `,
})
export class SmartTableDataDatepickerComponent
  extends DefaultEditor
  implements OnInit
{
  inputModel: Date;
  constructor() {
    super();
  }
  ngOnInit(): void {
    if (this.cell.newValue) {
      this.inputModel = new Date(this.changeDate(this.cell.newValue));
    }
  }
  handleDateChange(event: Date) {
    this.cell.newValue = event.toLocaleDateString('en-GB');
  }
  changeDate = (date: string) => {
    const [dd, mm, yyyy] = date.split('/');
    return `${mm}-${dd}-${yyyy}`;
  };
}
