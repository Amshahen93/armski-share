import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkiMountaineeringRoutingModule } from './ski-mountaineering-routing.module';
import { SkiMountaineeringComponent } from './ski-mountaineering.component';


@NgModule({
  declarations: [SkiMountaineeringComponent],
  imports: [
    CommonModule,
    SkiMountaineeringRoutingModule
  ]
})
export class SkiMountaineeringModule { }
