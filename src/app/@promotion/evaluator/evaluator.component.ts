import { Component, ViewChild } from "@angular/core";
import { NbAccordionItemComponent, NbStepperComponent } from "@nebular/theme";
import { TokenService } from "../../token.service";
@Component({
  selector: "evaluator",
  templateUrl: "./evaluator.component.html",
})
export class EvaluatorComponent {
  evaluatorId = '';
  teacher = {
    id: 0,
  };
  @ViewChild("ficha") ficha: NbAccordionItemComponent;
  @ViewChild("teachers") teachers: NbAccordionItemComponent;

  constructor(private tokenService: TokenService) {
    this.evaluatorId = this.tokenService.getPayload()?.id;
  }

  onSetTeacher(teacher) {
    this.teacher = teacher;
    this.ficha.open();
    this.teachers.close();
  }
}
