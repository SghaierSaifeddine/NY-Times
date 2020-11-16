import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';



@NgModule({
  declarations: [HomeSliderComponent],
  imports: [
    CommonModule
  ],
  exports: [ HomeSliderComponent ]
})
export class HomeFeatureModule { }
