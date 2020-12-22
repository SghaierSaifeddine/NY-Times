import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { HeaderComponent } from './header/header.component';
import { HomeSliderComponent } from '../features/home-feature/components/home-slider/home-slider.component';
import { CardImageRightComponent } from '../features/home-feature/components/card-image-right/card-image-right.component';
import { CardImgTopComponent } from '../features/home-feature/components/card-img-top/card-img-top.component';
import { OpinionCardComponent } from '../features/home-feature/components/opinion-card/opinion-card.component';
import { NewsComponent } from '../features/home-feature/components/news/news.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import { WorldNewFeatureModule } from '../features/world-new-feature/world-new-feature.module';



@NgModule({
  declarations: [CoreComponent, HeaderComponent, HomeSliderComponent, CardImageRightComponent, OpinionCardComponent, CardImgTopComponent, NewsComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    WorldNewFeatureModule
  ],
  exports: [CoreComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
 }
