import { ChangeDetectionStrategy, Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "nb-request-register",
  styleUrls: ["./request-reset-password.component.scss"],
  templateUrl: "./request-reset-password.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestResetPasswordComponent {
  fg: FormGroup;
  submitted = false;

  constructor(
    protected authService: AuthService,
    protected router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.fg = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
        ],
      ],
    });
  }

  async sendReset() {
    this.submitted = true;
    await this.authService.requestResetPassword(this.fg.value);
    this.submitted = false;
  }
}
