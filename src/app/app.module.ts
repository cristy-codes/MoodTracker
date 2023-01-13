import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { HandtrackerComponent } from "./handtracker/handtracker.component";
import { MoodPageComponent } from "./mood-page/mood-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HandtrackerComponent,
    MoodPageComponent,
    HomePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
