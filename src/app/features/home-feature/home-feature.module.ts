import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { CardImageRightComponent } from './components/card-image-right/card-image-right.component';
import { OpinionCardComponent } from './components/opinion-card/opinion-card.component';
import { CardImgTopComponent } from './components/card-img-top/card-img-top.component';
import { NewsComponent } from './components/news/news.component';



@NgModule({
  declarations: [HomeSliderComponent, CardImageRightComponent, OpinionCardComponent, CardImgTopComponent, NewsComponent],
  imports: [
    CommonModule
  ],
  exports: [ HomeSliderComponent, CardImageRightComponent, OpinionCardComponent, CardImgTopComponent, NewsComponent ]
})
export class HomeFeatureModule { }
