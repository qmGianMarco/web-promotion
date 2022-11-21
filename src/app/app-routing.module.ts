import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./auth-guard.service";
import { NbAuthComponent, NbLogoutComponent } from "@nebular/auth";
import { NbRegisterCustomComponent } from "./pages/auth/register/register.component";
import { LoginComponent } from "./pages/auth/login/login.component";
import { RequestResetPasswordComponent } from "./pages/auth/request-reset-password/request-reset-password.component";
import { ResetPasswordComponent } from "./pages/auth/reset-password/reset-password.component";
import { ConfirmAccountComponent } from "./pages/auth/confirm-account/confirm-account.component";

export const routes: Routes = [
  {
    path: "",
    // canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "auth",
    component: NbAuthComponent,
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "register",
        component: NbRegisterCustomComponent,
      },
      {
        path: "request-reset-password",
        component: RequestResetPasswordComponent,
      },
      {
        path: "reset-password/:token",
        component: ResetPasswordComponent,
      },
      {
        path: "confirm-account/:token",
        component: ConfirmAccountComponent,
      },
      {
        path: "logout",
        component: NbLogoutComponent,
      },
    ],
  },
  { path: "", redirectTo: "auth/login", pathMatch: "full" },
  { path: "**", redirectTo: "auth/login" },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
