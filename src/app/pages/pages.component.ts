import { Component, OnInit } from "@angular/core";
import { CandidateService } from "../@promotion/services/candidate.service";
import { TokenService } from "../token.service";
import { getMenuByRoleId } from "./pages-menu";

@Component({
  styleUrls: ["pages.component.scss"],
  template: `
    <ng-container *ngIf="canDisplay">
      <ngx-one-column-layout>
        <nb-menu [items]="menu"></nb-menu>
        <router-outlet>
          <notification></notification>
        </router-outlet>
      </ngx-one-column-layout>
    </ng-container>
  `,
})
export class PagesComponent implements OnInit {
  menu: any;
  canDisplay = false;
  constructor(
    private tokenService: TokenService,
    private candidateService: CandidateService
  ) {
    const user = this.tokenService.getPayload();
    this.menu = getMenuByRoleId(user?.roleId);
  }

  async ngOnInit() {
    const authId = this.tokenService.getAuthId();
    if (this.tokenService.isCandidate()) {
      await this.candidateService.findAndSelect(authId);
    }
    this.canDisplay = true;
  }
}
