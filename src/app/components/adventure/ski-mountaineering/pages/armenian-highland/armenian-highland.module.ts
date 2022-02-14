import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArmenianHighlandRoutingModule } from './armenian-highland-routing.module';
import { ArmenianHighlandComponent } from './armenian-highland.component';
import { MountKazbegiRoutingModule } from '../mount-kazbegi/mount-kazbegi-routing.module';
import { ImageZoomModule } from 'src/app/modules/image-zoom.module';
import { ParallaxModule } from 'src/app/modules/parallax.module';


@NgModule({
  declarations: [ArmenianHighlandComponent],
  imports: [
    CommonModule,
    ArmenianHighlandRoutingModule,
    MountKazbegiRoutingModule,
    ImageZoomModule,
    ParallaxModule
  ]
})
export class ArmenianHighlandModule { }
