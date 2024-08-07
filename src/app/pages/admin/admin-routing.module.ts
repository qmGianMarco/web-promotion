import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListCandidatesComponent } from '../../@promotion/shared/list-candidates/list-candidates.component';

const routes: Routes = [
  {
    path: "admin",
    component: ListCandidatesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
export const routedComponents = [];
