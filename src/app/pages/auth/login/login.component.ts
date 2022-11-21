import { ChangeDetectionStrategy, Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { NbAuthResult, NbAuthService } from "@nebular/auth";
import { NbToastrService } from "@nebular/theme";
import { getStatusToastByHttpStatus } from '../../../@promotion/promotion.service';
import { AuthService } from "../auth.service";

@Component({
  selector: "nb-login",
  styleUrls: ["./login.component.scss"],
  templateUrl: "./login.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  fg: FormGroup;
  submitted = false;

  constructor(
    protected authService: AuthService,
    protected nbAuthService: NbAuthService,
    private toastrService: NbToastrService,
    protected router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.fg = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  async login() {
    this.submitted = true;
    this.nbAuthService
      .authenticate("email", this.fg.value)
      .subscribe((res: NbAuthResult) => {
        if (res.isSuccess()) {
          this.toastrService.success(res.getMessages()[0], "Iniciar Sesión", {
            destroyByClick: false,
            duration: 1000,
          });
          setTimeout(() => {
            this.router.navigate(["/pages/home"]);
          }, 1000);
        }
        if (res.isFailure()) {
          this.toastrService.show(
            res.getErrors()[0] || "Error Interno",
            "Iniciar Sesión",
            {
              status: getStatusToastByHttpStatus(res.getResponse().status),
              destroyByClick: true,
              duration: 0,
              preventDuplicates: true,
            }
          );
        }
        this.submitted = false;
      });
  }
}
