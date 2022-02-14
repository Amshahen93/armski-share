import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClimbingMountAraratRoutingModule } from './climbing-mount-ararat-routing.module';
import { ImageZoomModule } from 'src/app/modules/image-zoom.module';
import { ParallaxModule } from 'src/app/modules/parallax.module';
import { ClimbingMountAraratComponent } from './climbing-mount-ararat.component';


@NgModule({
  declarations: [ClimbingMountAraratComponent],
  imports: [
    CommonModule,
    ClimbingMountAraratRoutingModule,
    ImageZoomModule,
    ParallaxModule
  ]
})
export class ClimbingMountAraratModule { }
