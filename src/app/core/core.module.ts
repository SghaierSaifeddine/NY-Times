import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { throwIfAlreadyLoaded } from './module-import-guard';



@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule
  ],
  exports: [CoreComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
 }