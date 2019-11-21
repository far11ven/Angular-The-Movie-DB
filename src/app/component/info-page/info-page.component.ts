import { Component, OnInit } from "@angular/core";
import { BackendServiceComponent } from "../../backend-service/backend-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-info-page",
  templateUrl: "./info-page.component.html",
  styleUrls: ["./info-page.component.scss"]
})
export class InfoPageComponent implements OnInit {
  movieItemTitle: String = "";
  movieDetails: any = {};

  constructor(
    public _backendSvc: BackendServiceComponent,
    private _route: ActivatedRoute
  ) {
    console.log("this._route.snapshot", this._route.snapshot);
    this.movieItemTitle = this._route.snapshot.url[1].path || "";

    if (this.movieItemTitle != "") {
      this.getMovieDetails();
    }
  }

  ngOnInit() {}

  getMovieDetails() {
    this._backendSvc.getSelectedMovieInfo(this.movieItemTitle).subscribe(
      response => {
        console.log("response", response);
        this.movieDetails = response;
      },
      error => console.log("error", error)
    );
  }

  getIframeURL(videoId: string) {
    return `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
  }
}
