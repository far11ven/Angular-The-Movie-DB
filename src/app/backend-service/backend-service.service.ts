import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BackendServiceComponent implements OnInit {
  public url =
    "https://themoviedb-back-end.herokuapp.com//api/v1/movie/search?q=";
  constructor(public http: HttpClient) {}

  ngOnInit() {}

  fetch(searchText: string) {
    return this.http.get(this.url + searchText);
  }
}
