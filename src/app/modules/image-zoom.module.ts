import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageZoomDirective } from '../directives/image-zoom.directive';



@NgModule({
  declarations: [ImageZoomDirective],
  imports: [
    CommonModule
  ],
  exports: [ImageZoomDirective]
})
export class ImageZoomModule { }
