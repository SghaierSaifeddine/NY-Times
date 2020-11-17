import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { HeaderComponent } from './header/header.component';
import { HomeSliderComponent } from '../features/home-feature/components/home-slider/home-slider.component';
import { CardImageRightComponent } from '../features/home-feature/components/card-image-right/card-image-right.component';



@NgModule({
  declarations: [CoreComponent, HeaderComponent, HomeSliderComponent, CardImageRightComponent],
  imports: [
    CommonModule,
    
  ],
  exports: [CoreComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
 }
