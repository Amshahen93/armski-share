import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClimbingCombiComponent } from './climbing-combi.component';


const routes: Routes = [{
  path: '', component: ClimbingCombiComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClimbingCombiRoutingModule { }
