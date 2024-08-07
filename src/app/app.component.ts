/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { AnalyticsService } from "./@core/utils/analytics.service";
import { SeoService } from "./@core/utils/seo.service";
import { StageService } from './@promotion/services/stage.service';
import { LoadingService } from "./interceptors/loading/loading.service";

@Component({
  selector: "app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  loading$ = this.loader.loading$;
  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
    public loader: LoadingService,
    private cdr: ChangeDetectorRef,
    private stageService: StageService
  ) {}

  async ngOnInit() {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
    await this.stageService.setCanStages();
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
}
