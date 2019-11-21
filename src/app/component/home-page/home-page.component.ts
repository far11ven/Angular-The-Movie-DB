import { Component, OnInit } from "@angular/core";
import { BackendServiceComponent } from "../../backend-service/backend-service.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  public searchText = "";
  public imdbData: any[] = [];
  public youtubeData: any[] = [];

  constructor(
    public _backendSvc: BackendServiceComponent,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    console.log("this._route:", this._route.queryParams["value"].q);
    this.searchText = this._route.queryParams["value"].q || "";

    if (this.searchText != "") {
      this.getMovieDetails();
    }
  }

  ngOnInit() {}

  getMovieDetails() {
    this._backendSvc.fetch(this.searchText).subscribe(
      response => {
        this.imdbData = response["data"].imdbData.results;
        this.youtubeData = response["data"].youtubeData.data.items;
      },
      error => console.log("error", error)
    );

    this._router.navigate(["/"], { queryParams: { q: this.searchText } });
  }

  getFormData(form) {
    console.log(form.value);
    this.searchText = form.value.search;
  }

  getIframeURL(videoId: string) {
    return `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
  }
}
