import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
@Component({
  selector: "selected-candidate",
  templateUrl: "./selected-candidate.component.html",
})
export class SelectedCandidateComponent implements OnChanges {
  @Input() teacher: any;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const currentTeacher = changes.teacher.currentValue;
    this.teacher = currentTeacher ? currentTeacher : this.teacher;
  }
}
