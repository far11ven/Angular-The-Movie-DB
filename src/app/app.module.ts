import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./component/home-page/home-page.component";
import { InfoPageComponent } from "./component/info-page/info-page.component";
import { FormsModule } from "@angular/forms";
import { BackendServiceComponent } from "./backend-service/backend-service.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SelectedCompanyService } from "./selected-company.service";
import { AlertModule } from "ngx-bootstrap";

@NgModule({
  declarations: [AppComponent, HomePageComponent, InfoPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AlertModule.forRoot()
  ],
  providers: [BackendServiceComponent, SelectedCompanyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
