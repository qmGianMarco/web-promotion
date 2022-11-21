import { Component } from "@angular/core";
import { TokenService } from "../../../token.service";

@Component({
  template: `<forms [teacherId]="teacherId"></forms>`,
})
export class FichaComponent {
  teacherId: string = "";
  constructor(private tokenService: TokenService) {
    this.teacherId = this.tokenService.getAuthId();
  }
}
