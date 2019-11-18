import { Component, OnInit } from "@angular/core";
import { SelectedItemService } from "../../backend-service/selected-item.service";

@Component({
  selector: "app-info-page",
  templateUrl: "./info-page.component.html",
  styleUrls: ["./info-page.component.scss"]
})
export class InfoPageComponent implements OnInit {
  constructor(public selectedItemSvc: SelectedItemService) {}

  ngOnInit() {}
}
