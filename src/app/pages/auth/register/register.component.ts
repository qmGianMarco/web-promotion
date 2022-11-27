import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Faculty } from "../../../utils/faculties";
import { TypeCandidate } from "../../../utils/type-candidate";
import { AuthService } from "../auth.service";
import { passwordEquality } from "../utils/validator-password-equality";

@Component({
  selector: "nb-register",
  styleUrls: ["./register.component.scss"],
  templateUrl: "./register.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbRegisterCustomComponent implements OnInit {
  fg: FormGroup;
  submitted = false;
  faculties = [];
  typesCandidate = [];

  constructor(
    protected authService: AuthService,
    protected router: Router,
    private fb: FormBuilder
  ) {
    this.faculties = Faculty.getAllInfo();
    this.typesCandidate = TypeCandidate.getAllInfo();
  }

  ngOnInit() {
    this.fg = this.fb.group({
      name: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      motherLastname: ["", [Validators.required]],
      dni: ["", [Validators.required, Validators.pattern("\\d{8}")]],
      phone: ["", [Validators.required, Validators.pattern("\\d{9}")]],
      codeUni: ["", [Validators.required]],
      facultyId: [1, [Validators.required]],
      currentTypeCandidateId: [1, [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      repassword: ["", [Validators.required]],
    });
    this.fg.setValidators(passwordEquality());
  }

  async register() {
    this.submitted = true;
    let payload = this.fg.value;
    await this.authService.preRegistration(payload);
    this.submitted = false;
  }
}
