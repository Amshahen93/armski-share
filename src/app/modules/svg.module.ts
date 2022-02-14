import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgDirective } from '../directives/svg.directive';



@NgModule({
  declarations: [SvgDirective],
  imports: [
    CommonModule
  ],
  exports: [SvgDirective]
})
export class SvgModule { }
