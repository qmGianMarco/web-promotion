import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'stepp',
  templateUrl: './stepp.component.html',
})
export class SteppComponent {
  @Input() document: any;
  @Input() teacherId: string;
  settingReady: boolean = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.document?.currentValue.heading) {
      this.settingReady = true;
    }
  }
}
