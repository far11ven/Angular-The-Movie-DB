import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./component/home-page/home-page.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    children: []
  },
  { path: "home", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
