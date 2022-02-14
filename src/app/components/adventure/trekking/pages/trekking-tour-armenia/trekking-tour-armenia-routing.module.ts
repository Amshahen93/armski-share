import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrekkingTourArmeniaComponent } from './trekking-tour-armenia.component';

const routes: Routes = [{
  path: '', component: TrekkingTourArmeniaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrekkingTourArmeniaRoutingModule { }
