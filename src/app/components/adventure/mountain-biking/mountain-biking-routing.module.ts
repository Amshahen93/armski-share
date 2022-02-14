import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MountainBikingComponent } from './mountain-biking.component';


const routes: Routes = [{
  path: 'mtb-trip-armenia', loadChildren: () => 
  import('./pages/mtb-trip-armenia/mtb-trip-armenia.module').
  then(m => m.MtbTripArmeniaModule)
},{
  path: '', component: MountainBikingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MountainBikingRoutingModule { }
