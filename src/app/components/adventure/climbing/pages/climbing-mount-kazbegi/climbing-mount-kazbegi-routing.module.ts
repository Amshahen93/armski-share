import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClimbingMountKazbegiComponent } from './climbing-mount-kazbegi.component';


const routes: Routes = [{
  path: '', component: ClimbingMountKazbegiComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClimbingMountKazbegiRoutingModule { }
