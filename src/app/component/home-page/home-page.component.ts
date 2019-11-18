import { Component, OnInit } from "@angular/core";
import { BackendServiceComponent } from "../../backend-service/backend-service.component";
import { SelectedCompanyService } from "../../selected-company.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  public searchText = "";
  public companyInfo: any[] = [];
  public selectedCompany: any;

  constructor(
    public backendSvc: BackendServiceComponent,
    public selectedCompanySvc: SelectedCompanyService
  ) {}

  ngOnInit() {}

  getCompanyDetails() {
    if (this.searchText.length > 2) {
      this.backendSvc.test(this.searchText).subscribe(
        response => {
          console.log("response", response["searchResults"]);
          this.companyInfo = response["searchResults"];
        },
        error => console.log("error", error)
      );
    }
  }

  onCompanySelect(company) {
    this.selectedCompany = company;
    this.searchText = this.selectedCompany["companyName"];
    this.selectedCompanySvc.companyName = this.selectedCompany["companyName"];
    this.selectedCompanySvc.companyIds = this.selectedCompany["companyIds"];
    console.log("selected event: ", this.selectedCompany);
  }
}
