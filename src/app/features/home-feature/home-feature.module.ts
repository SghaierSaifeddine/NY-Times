import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { CardImageRightComponent } from './components/card-image-right/card-image-right.component';
import { OpinionCardComponent } from './components/opinion-card/opinion-card.component';
import { CardImgTopComponent } from './components/card-img-top/card-img-top.component';



@NgModule({
  declarations: [HomeSliderComponent, CardImageRightComponent, OpinionCardComponent, CardImgTopComponent],
  imports: [
    CommonModule
  ],
  exports: [ HomeSliderComponent, CardImageRightComponent, OpinionCardComponent, CardImgTopComponent ]
})
export class HomeFeatureModule { }
