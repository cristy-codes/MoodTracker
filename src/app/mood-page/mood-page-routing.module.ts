import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoodPageComponent } from './mood-page.component';

const routes: Routes = [
  {
    path: '',
    component: MoodPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}