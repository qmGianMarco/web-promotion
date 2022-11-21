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
import { ThemeModule } from '../../@theme/theme.module';
import { PromocionModule } from '../../@promotion/promocion.module';
import { InitRoutingModule, routedComponents } from './home-routing.module';

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
    InitRoutingModule,
    PromocionModule,
  ],
  declarations: [...routedComponents],
})
export class HomeModule {}
