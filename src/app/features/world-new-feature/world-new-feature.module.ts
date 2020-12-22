import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorldNewsHomeComponent } from './components/world-news-home/world-news-home.component';
import { WorldNewsHeaderComponent } from './components/world-news-header/world-news-header.component';
import { LatestWorldNewsComponent } from './components/latest-world-news/latest-world-news.component';



@NgModule({
  declarations: [WorldNewsHomeComponent, WorldNewsHeaderComponent, LatestWorldNewsComponent],
  imports: [
    CommonModule,
  ],
  exports: [WorldNewsHomeComponent, WorldNewsHeaderComponent]
})
export class WorldNewFeatureModule { }
