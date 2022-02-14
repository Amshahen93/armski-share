import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrekkingRoutingModule } from './trekking-routing.module';
import { TrekkingComponent } from './trekking.component';


@NgModule({
  declarations: [
    TrekkingComponent
  ],
  imports: [
    CommonModule,
    TrekkingRoutingModule
  ]
})
export class TrekkingModule { }
