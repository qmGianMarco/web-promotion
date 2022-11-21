import { Component } from "@angular/core";
import { TokenService } from "../token.service";
import { getMenuByRoleId } from "./pages-menu";

@Component({
  styleUrls: ["pages.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet>
        <notification></notification>
      </router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  menu: any;
  constructor(private tokenService: TokenService) {
    const user = this.tokenService.getPayload();
    this.menu = getMenuByRoleId(user?.roleId);    
  }
}
