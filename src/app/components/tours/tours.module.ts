import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursRoutingModule } from './tours-routing.module';
import { ToursComponent } from './tours.component';
import { TourComponent } from './tour/tour.component';
import { ParallaxModule } from '../../modules/parallax.module';
import { ImageZoomModule } from 'src/app/modules/image-zoom.module';

@NgModule({
  declarations: [ToursComponent, TourComponent],
  imports: [
    CommonModule,
    ToursRoutingModule,
    ParallaxModule,
    ImageZoomModule
  ]
})
export class ToursModule { }
