import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BackendServiceComponent implements OnInit {
  public url =
    "https://themoviedb-back-end.herokuapp.com/api/v1/movie/search?q=";
  public omdbUrl = "http://www.omdbapi.com/?apikey=104313cc&i=";
  constructor(public http: HttpClient) {}

  ngOnInit() {}

  fetch(searchText: string) {
    return this.http.get(this.url + searchText);
  }

  getSelectedMovieInfo(titleId: String) {
    return this.http.get(this.omdbUrl + titleId);
  }
}
