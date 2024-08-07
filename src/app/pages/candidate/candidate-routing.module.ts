import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsComponent } from "../../@promotion/candidate/forms/forms.component";
import { GeneralDataComponent } from "../../@promotion/candidate/general-data/general-data.component";

const routes: Routes = [
  {
    path: "candidate",
    children: [
      {
        path: "general-data",
        component: GeneralDataComponent,
      },
      {
        path: "forms",
        component: FormsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateRoutingModule {}

export const routedComponents = [];
