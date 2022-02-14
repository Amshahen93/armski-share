import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MountKazbegiRoutingModule } from './mount-kazbegi-routing.module';
import { MountKazbegiComponent } from './mount-kazbegi.component';
import { ImageZoomModule } from 'src/app/modules/image-zoom.module';
import { ParallaxModule } from 'src/app/modules/parallax.module';


@NgModule({
  declarations: [MountKazbegiComponent],
  imports: [
    CommonModule,
    MountKazbegiRoutingModule,
    ImageZoomModule,
    ParallaxModule
  ]
})
export class MountKazbegiModule { }
