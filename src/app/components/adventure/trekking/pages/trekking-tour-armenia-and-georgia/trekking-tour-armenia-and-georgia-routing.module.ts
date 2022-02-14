import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrekkingTourArmeniaAndGeorgiaComponent } from './trekking-tour-armenia-and-georgia.component';


const routes: Routes = [{
  path: '', component: TrekkingTourArmeniaAndGeorgiaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrekkingTourArmeniaAndGeorgiaRoutingModule { }
