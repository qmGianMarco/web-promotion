import { Component } from "@angular/core";
import { CandidateService } from "../../../@promotion/shared/list-candidates/candidate.service";
import { TokenService } from "../../../token.service";

@Component({
  template: `<general-data *ngIf="canDisplay"></general-data>`,
})
export class InscripcionComponent {
  teacherId = "";
  canDisplay = false;
  constructor(
    private tokenService: TokenService,
    private candidateService: CandidateService
  ) {
    this.teacherId = this.tokenService.getAuthId();
    }

  async ngOnInit() {
    await this.candidateService.findAndSelect(this.teacherId);
    this.canDisplay = true;
  }
}
