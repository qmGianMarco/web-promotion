import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbStepperModule,
  NbSelectModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { PromocionModule } from '../../@promotion/promocion.module';
import {
  CandidateRoutingModule,
  routedComponents,
} from './candidate-routing.module';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbStepperModule,
    NbSelectModule,
    ThemeModule,
    CandidateRoutingModule,
    Ng2SmartTableModule,
    PromocionModule,
  ],
  declarations: [...routedComponents],
})
export class CandidateModule {}
