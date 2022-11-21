import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NbAuthModule } from "@nebular/auth";
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbRadioModule,
  NbSpinnerModule,
  NbSelectModule,
} from "@nebular/theme";
import { PromocionModule } from "../../@promotion/promocion.module";

import { ThemeModule } from "../../@theme/theme.module";
import { ConfirmAccountComponent } from './confirm-account/confirm-account.component';
import { LoginComponent } from "./login/login.component";
import { NbRegisterCustomComponent } from "./register/register.component";
import { RequestResetPasswordComponent } from "./request-reset-password/request-reset-password.component";
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule,
    NbCardModule,
    NbSpinnerModule,
    PromocionModule,
    NbRadioModule,
    NbSelectModule
  ],
  declarations: [
    LoginComponent,
    RequestResetPasswordComponent,
    NbRegisterCustomComponent,
    ResetPasswordComponent,
    ConfirmAccountComponent
  ],
})
export class AuthCustomModule {}
