import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderImgPageRoutingModule } from './slider-img-routing.module';

import { SliderImgPage } from './slider-img.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderImgPageRoutingModule
  ],
  exports: [
    SliderImgPage
  ],
  declarations: [SliderImgPage]
})
export class SliderImgPageModule {}
