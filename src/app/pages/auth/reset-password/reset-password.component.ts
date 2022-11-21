import { ActivatedRoute, Router } from "@angular/router";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { passwordEquality } from "../utils/validator-password-equality";

@Component({
  selector: "nb-register",
  styleUrls: ["./reset-password.component.scss"],
  templateUrl: "./reset-password.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent {
  fg: FormGroup;
  submitted = false;
  token = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected authService: AuthService,
    private fb: FormBuilder
  ) {
    this.route.params.subscribe((params) => {
      this.token = params.token;
    });
  }

  ngOnInit() {
    this.fg = this.fb.group({
      password: ["", [Validators.required]],
      repassword: ["", [Validators.required]],
    });
    this.fg.setValidators(passwordEquality());
  }

  async updatePassword() {
    this.submitted = true;
    const { password } = this.fg.value;
    await this.authService.resetPassword({
      password,
      token: this.token,
    });
    this.submitted = false;
  }
}
