import { Component, Input, SimpleChanges } from "@angular/core";

@Component({
  selector: "stepp",
  templateUrl: "./stepp.component.html",
})
export class SteppComponent {
  @Input() document: any;
  hasValue: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.document?.currentValue.heading) {
      this.hasValue = true;
    }
  }
}
