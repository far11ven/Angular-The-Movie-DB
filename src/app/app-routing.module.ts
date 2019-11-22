import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./component/home-page/home-page.component";
import { InfoPageComponent } from "./component/info-page/info-page.component";

const routes: Routes = [
  { path: "", component: HomePageComponent, pathMatch: "full" },
  { path: "home", redirectTo: "", pathMatch: "full" },
  { path: "info/:id", component: InfoPageComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
