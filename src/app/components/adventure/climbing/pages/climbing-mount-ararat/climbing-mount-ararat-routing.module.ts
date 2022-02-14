import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClimbingMountAraratComponent } from './climbing-mount-ararat.component';


const routes: Routes = [{
  path: '', component: ClimbingMountAraratComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClimbingMountAraratRoutingModule { }
