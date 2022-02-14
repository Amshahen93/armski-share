import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrekkingTourArmeniaAndGeorgiaRoutingModule } from './trekking-tour-armenia-and-georgia-routing.module';
import { ImageZoomModule } from 'src/app/modules/image-zoom.module';
import { ParallaxModule } from 'src/app/modules/parallax.module';
import { TrekkingTourArmeniaAndGeorgiaComponent } from './trekking-tour-armenia-and-georgia.component';


@NgModule({
  declarations: [TrekkingTourArmeniaAndGeorgiaComponent],
  imports: [
    CommonModule,
    TrekkingTourArmeniaAndGeorgiaRoutingModule,
    ImageZoomModule,
    ParallaxModule
  ]
})
export class TrekkingTourArmeniaAndGeorgiaModule { }
