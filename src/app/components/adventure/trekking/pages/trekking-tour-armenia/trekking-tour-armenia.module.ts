import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrekkingTourArmeniaRoutingModule } from './trekking-tour-armenia-routing.module';
import { ImageZoomModule } from 'src/app/modules/image-zoom.module';
import { ParallaxModule } from 'src/app/modules/parallax.module';
import { TrekkingTourArmeniaComponent } from './trekking-tour-armenia.component';


@NgModule({
  declarations: [TrekkingTourArmeniaComponent],
  imports: [
    CommonModule,
    TrekkingTourArmeniaRoutingModule,
    ImageZoomModule,
    ParallaxModule
  ]
})
export class TrekkingTourArmeniaModule { }
