import { Component, OnInit } from "@angular/core";
import { SelectedCompanyService } from "../../selected-company.service";

@Component({
  selector: "app-info-page",
  templateUrl: "./info-page.component.html",
  styleUrls: ["./info-page.component.scss"]
})
export class InfoPageComponent implements OnInit {
  constructor(public selectedCompanySvc: SelectedCompanyService) {}

  ngOnInit() {}
}
