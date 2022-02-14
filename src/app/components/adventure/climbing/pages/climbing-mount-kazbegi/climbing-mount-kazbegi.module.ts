import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClimbingMountKazbegiRoutingModule } from './climbing-mount-kazbegi-routing.module';
import { ClimbingMountKazbegiComponent } from './climbing-mount-kazbegi.component';
import { ParallaxModule } from 'src/app/modules/parallax.module';
import { ImageZoomModule } from 'src/app/modules/image-zoom.module';


@NgModule({
  declarations: [ClimbingMountKazbegiComponent],
  imports: [
    CommonModule,
    ClimbingMountKazbegiRoutingModule,
    ImageZoomModule,
    ParallaxModule
  ]
})
export class ClimbingMountKazbegiModule { }
