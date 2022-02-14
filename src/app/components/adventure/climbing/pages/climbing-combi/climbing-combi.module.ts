import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClimbingCombiComponent } from './climbing-combi.component';
import { ClimbingCombiRoutingModule } from './climbing-combi-routing.module';
import { ParallaxModule } from 'src/app/modules/parallax.module';
import { ImageZoomModule } from 'src/app/modules/image-zoom.module';


@NgModule({
  declarations: [ClimbingCombiComponent],
  imports: [
    CommonModule,
    ClimbingCombiRoutingModule,
    ImageZoomModule,
    ParallaxModule
  ]
})
export class ClimbingCombiModule { }
