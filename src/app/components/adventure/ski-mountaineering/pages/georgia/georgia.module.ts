import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeorgiaRoutingModule } from './georgia-routing.module';
import { GeorgiaComponent } from './georgia.component';
import { MountKazbegiRoutingModule } from '../mount-kazbegi/mount-kazbegi-routing.module';
import { ImageZoomModule } from 'src/app/modules/image-zoom.module';
import { ParallaxModule } from 'src/app/modules/parallax.module';


@NgModule({
  declarations: [GeorgiaComponent],
  imports: [
    CommonModule,
    GeorgiaRoutingModule,
    MountKazbegiRoutingModule,
    ImageZoomModule,
    ParallaxModule
  ]
})
export class GeorgiaModule { }
