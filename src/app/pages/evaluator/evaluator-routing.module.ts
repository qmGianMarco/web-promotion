import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EvaluatorComponent } from "../../@promotion/evaluator/evaluator.component";

const routes: Routes = [
  {
    path: "evaluator",
    component: EvaluatorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluatorRoutingModule {}

export const routedComponents = [];
