import { Injectable } from "@angular/core";

@Injectable()
export class SelectedItemService {
  public itemIds: number[] = [];
  public itemName = "";
}
