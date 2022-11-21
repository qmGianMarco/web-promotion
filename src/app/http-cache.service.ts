import { Injectable } from "@angular/core";
import { HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpCacheService {
  private requests: any = {};
  private urlsRedirectToDelete = {
    "/status": ["/teachers"]
  };
  private notUrlsCache = [
    "/forms",
  ];
  private urlsOrigin = Object.keys(this.urlsRedirectToDelete);
  private sep = "/s/";

  constructor() {}

  insert(url: string, response: HttpResponse<any>): void | undefined {
    let cache = true;
    for (const notUrlCache of this.notUrlsCache) {
      if (url.includes(notUrlCache)) {
        cache = false;
        break;
      }
    }
    if (cache) {
      // console.log(`Adding item to cache: ${url}`);
      this.requests[url] = response;
    }
  }

  get(url: string): HttpResponse<any> | undefined {
    return this.requests[url];
  }

  delete(url: string): void {
    delete this.requests[url];
    this.deleteRedirect(url);
  }
  deleteRedirect(_url: string): void {
    let url = _url;
    if (url.includes(this.sep)) {
      url = url.split(this.sep)[0];
    }
    for (const urlOrigin of this.urlsOrigin) {
      if (url.includes(urlOrigin)) {
        for (const urlDestiny of this.urlsRedirectToDelete[urlOrigin]) {
          let urlToDelete = url.replace(urlOrigin, urlDestiny);
          delete this.requests[urlToDelete];
        }
      }
    }
  }
}
