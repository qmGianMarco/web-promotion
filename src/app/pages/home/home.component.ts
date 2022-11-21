import { Component, OnInit } from "@angular/core";
import { TokenService } from "../../token.service";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Faculty } from "../../../assets/data/faculties";
@Component({
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  srcFrameReport: any;
  urlSafe: SafeResourceUrl;
  urlResultFinal: SafeResourceUrl;

  constructor(
    private tokenService: TokenService,
    public sanitizer: DomSanitizer
  ) {}

  async ngOnInit() {
    const facultyId = this.tokenService.getPayload()?.facultyId;
    const codeFaculty = Faculty.findCodeById(facultyId);
    let url = `../../../assets/docs/reports/${codeFaculty}.pdf`;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    url = `../../../assets/docs/reports-final/${codeFaculty}.pdf`;
    this.urlResultFinal = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
