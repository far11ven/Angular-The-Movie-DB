import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./component/home-page/home-page.component";
import { InfoPageComponent } from "./component/info-page/info-page.component";
import { FormsModule } from "@angular/forms";
import { BackendServiceComponent } from "./backend-service/backend-service.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SafePipe } from "./app.safeurl.pipe";
import { AlertModule } from "ngx-bootstrap";

@NgModule({
  declarations: [AppComponent, HomePageComponent, InfoPageComponent, SafePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AlertModule.forRoot()
  ],
  providers: [BackendServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
