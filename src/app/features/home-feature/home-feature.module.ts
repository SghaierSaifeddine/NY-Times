import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { CardImageRightComponent } from './components/card-image-right/card-image-right.component';



@NgModule({
  declarations: [HomeSliderComponent, CardImageRightComponent],
  imports: [
    CommonModule
  ],
  exports: [ HomeSliderComponent, CardImageRightComponent ]
})
export class HomeFeatureModule { }
