import { ActivatedRoute, Router } from "@angular/router";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AuthService } from "../auth.service";


@Component({
  selector: "nb-register",
  styleUrls: ["./confirm-account.component.scss"],
  templateUrl: "./confirm-account.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmAccountComponent {
  fg: FormGroup;
  submitted = false;
  token = "";
  messageConfirm = {
    title: "Esperando respuesta",
    message: "",
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected authService: AuthService
  ) {
    this.route.params.subscribe((params) => {
      this.token = params.token;
      this.confirmAccount();
    });
  }
  
  async confirmAccount() {
    this.submitted = true;
    await this.authService.confirmAccount({
      token: this.token,
    });
    this.submitted = false;
  }
}
