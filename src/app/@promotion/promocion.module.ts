import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NbCardModule,
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbStepperModule,
  NbAlertModule,
  NbSelectModule,
  NbSpinnerModule,
  NbDatepickerModule,
  NbListModule,
  NbTabsetModule,
  NbAccordionModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { FileComponent } from "./file/file.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedComponents } from "./shared";
import { EvaluatorComponents } from "./evaluator";
import { CandidateComponents } from "./candidate";
import { SmartTableDataDatepickerComponent } from "./candidate/forms/stepp/table/smart-table-datepicker/smart-table-datepicker.component";

const components = [
  ...CandidateComponents,
  FileComponent,
  ...SharedComponents,
  ...EvaluatorComponents,
];

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbTreeGridModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbStepperModule,
    Ng2SmartTableModule,
    NbAlertModule,
    NbSelectModule,
    NbSpinnerModule,
    NbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NbTabsetModule,
    NbListModule,
    NbAccordionModule,
  ],
  declarations: [...components],
  exports: [...components],
  entryComponents: [SmartTableDataDatepickerComponent],
})
export class PromocionModule {}
