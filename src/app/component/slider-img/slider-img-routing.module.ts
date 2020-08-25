import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderImgPage } from './slider-img.page';

const routes: Routes = [
  {
    path: '',
    component: SliderImgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderImgPageRoutingModule {}
