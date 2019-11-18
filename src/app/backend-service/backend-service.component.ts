import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-backend-service"
})
export class BackendServiceComponent implements OnInit {
  public url = "https://www.youtube.com/results?pbj=1&search_query=";
  //'https://daas-qa-sig-api.circleback.com/service/contactcloud/companies/autocomplete?company_name=';

  constructor(public http: HttpClient) {}

  ngOnInit() {}

  test(searchText: string) {
    return this.http.get(this.url + searchText);
  }
}
