import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrekkingComponent } from './trekking.component';


const routes: Routes = [{
  path: 'trekking-tour-armenia', loadChildren: () => 
  import('./pages/trekking-tour-armenia/trekking-tour-armenia.module').
  then(m => m.TrekkingTourArmeniaModule)
}, {
  path: 'trekking-tour-armenia-and-georgia', loadChildren: () => 
  import('./pages/trekking-tour-armenia-and-georgia/trekking-tour-armenia-and-georgia.module').
  then(m => m.TrekkingTourArmeniaAndGeorgiaModule)
}, {
  path: '', component: TrekkingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrekkingRoutingModule { }
