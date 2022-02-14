import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MtbTripArmeniaComponent } from './mtb-trip-armenia.component';


const routes: Routes = [{
  path: '', component: MtbTripArmeniaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtbTripArmeniaRoutingModule { }
