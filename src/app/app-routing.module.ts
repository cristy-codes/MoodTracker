import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import {MoodPageComponent} from './mood-page/mood-page.component';

const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "mood", component: MoodPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
