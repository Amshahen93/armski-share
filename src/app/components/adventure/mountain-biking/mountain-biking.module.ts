import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MountainBikingRoutingModule } from './mountain-biking-routing.module';
import { MountainBikingComponent } from './mountain-biking.component';


@NgModule({
  declarations: [MountainBikingComponent],
  imports: [
    CommonModule,
    MountainBikingRoutingModule
  ]
})
export class MountainBikingModule { }
