import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { ImageZoomModule } from '../..//modules/image-zoom.module';
import { GalleryComponent } from './gallery.component';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    ImageZoomModule
  ]
})
export class GalleryModule { }
