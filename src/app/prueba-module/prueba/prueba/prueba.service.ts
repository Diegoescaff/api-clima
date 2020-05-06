import { Injectable } from "@angular/core";
import { HttpResponse, HttpClient } from "@angular/common/http";

import { URL_SERVICIOS } from "../../../../config/config";

@Injectable({
  providedIn: "root",
})
export class HitsService {
  constructor(public http: HttpClient) {}

  findlocationSelect(location: any) {
    console.log(location);
    const headerDict = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    const requestOptions = {
      headers: new Headers(headerDict),
    };
    // location.city = location.city.replace(" ", "+");
    // location.contry = location.contry.replace(" ", "+");

    const url =
      URL_SERVICIOS +
      `?key=e0b47dd0680c41ada51161845200605&q=${location.city},${location.country}&format=json`;
    return this.http.get(url);
  }
}
