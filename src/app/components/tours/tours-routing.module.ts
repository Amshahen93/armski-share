import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToursComponent } from './tours.component';
import { TourComponent } from './tour/tour.component';


const routes: Routes = [{
  path: 'adventure/:name', component: ToursComponent
}, {
  path: 'cultural_tours/:name', component: ToursComponent
}, {
  path: 'adventure/:name/:tourName', component: TourComponent
}, {
  path: 'cultural_tours/:name/:tourName', component: TourComponent
}, {
  path: '**', redirectTo: 'home'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ToursRoutingModule { }
