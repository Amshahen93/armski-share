import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtbTripArmeniaRoutingModule } from './mtb-trip-armenia-routing.module';
import { MtbTripArmeniaComponent } from './mtb-trip-armenia.component';
import { ParallaxModule } from 'src/app/modules/parallax.module';
import { ImageZoomModule } from 'src/app/modules/image-zoom.module';


@NgModule({
  declarations: [MtbTripArmeniaComponent],
  imports: [
    CommonModule,
    MtbTripArmeniaRoutingModule,
    ImageZoomModule,
    ParallaxModule
  ]
})
export class MtbTripArmeniaModule { }
