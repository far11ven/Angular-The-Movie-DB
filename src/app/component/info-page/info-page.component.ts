import { Component, OnInit, Input } from "@angular/core";
import { BackendServiceComponent } from "../../backend-service/backend-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-info-page",
  templateUrl: "./info-page.component.html",
  styleUrls: ["./info-page.component.scss"]
})
export class InfoPageComponent implements OnInit {
  movieItemTitle: String = "";
  movieItemDetails: any = {};
  movieItemBlobData: any = {};

  public arrayOfKeys;
  constructor(
    public _backendSvc: BackendServiceComponent,
    private _route: ActivatedRoute
  ) {
    console.log("this._route.snapshot", this._route.snapshot);
    this.movieItemTitle = this._route.snapshot.url[1].path || "";

    if (this.movieItemTitle !== "") {
      this.getmovieItemDetails();
    }
  }

  ngOnInit() {}

  getmovieItemDetails() {
    this._backendSvc.getSelectedMovieInfo(this.movieItemTitle).subscribe(
      response => {
        console.log("response", response);
        this.movieItemDetails = response;
        this.movieItemBlobData["poster"] = response["Poster"];
        this.movieItemBlobData["plot"] = response["Plot"];
        this.movieItemBlobData["ratings"] = response["Ratings"];

        delete this.movieItemDetails["Poster"];
        delete this.movieItemDetails["Plot"];
        delete this.movieItemDetails["Ratings"];
      },
      error => console.log("error", error)
    );
  }
}
