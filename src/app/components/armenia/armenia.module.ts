import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArmeniaRoutingModule } from './armenia-routing.module';
import { SvgModule } from 'src/app/modules/svg.module';
import { MatButtonModule } from '@angular/material/button';

import { ArmeniaService } from './armenia.service';
import { ArmeniaComponent } from './armenia.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [ArmeniaComponent, BlogComponent],
  imports: [
    CommonModule,
    ArmeniaRoutingModule,
    MatButtonModule,
    SvgModule
  ],
  providers: [ArmeniaService]
})
export class ArmeniaModule { }
