import { Component, OnInit } from "@angular/core";
import { BackendServiceComponent } from "../../backend-service/backend-service.service";
import { SelectedItemService } from "../../backend-service/selected-item.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  public searchText = "";
  public imdbData: any[] = [];
  public youtubeData: any[] = [];
  public selectedItem: any;

  constructor(
    public backendSvc: BackendServiceComponent,
    public selectedItemSvc: SelectedItemService
  ) {}

  ngOnInit() {}

  getCompanyDetails() {
    this.backendSvc.fetch(this.searchText).subscribe(
      response => {
        console.log("response", response);
        this.imdbData = response["data"].imdbData.results;
        this.youtubeData = response["data"].youtubeData.data.items;
      },
      error => console.log("error", error)
    );
  }

  onItemSelect(item) {
    this.selectedItem = item;
    this.searchText = this.selectedItem["companyName"];
    this.selectedItemSvc.itemName = this.selectedItem["companyName"];
    this.selectedItemSvc.itemIds = this.selectedItem["companyIds"];
    console.log("selected event: ", this.selectedItem);
  }

  getIframeURL(videoId: string) {
    console.log("Iframe:", "https://www.youtube.com/embed/ + ${videoId}");
    return `https://www.youtube.com/embed/${videoId}`;
  }
}
