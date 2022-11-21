import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "pages",
    component: PagesComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "",
        loadChildren: () =>
          import("./candidate/candidate.module").then((m) => m.CandidateModule),
      },
      {
        path: "",
        loadChildren: () =>
          import("./evaluator/evaluator.module").then((m) => m.EvaluatorModule),
      },
      {
        path: "",
        loadChildren: () =>
          import("./admin/admin.module").then((m) => m.AdminModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
