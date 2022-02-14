import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClimbingComponent } from './climbing.component';


const routes: Routes = [{
  path: 'climbing-combi', loadChildren: () => 
  import('./pages/climbing-combi/climbing-combi.module').
  then(m => m.ClimbingCombiModule)
}, {
  path: 'climbing-mount-ararat', loadChildren: () =>
  import('./pages/climbing-mount-ararat/climbing-mount-ararat.module').
  then(m => m.ClimbingMountAraratModule)
}, {
  path: 'climbing-mount-kazbegi', loadChildren: () =>
  import('./pages/climbing-mount-kazbegi/climbing-mount-kazbegi.module').
  then(m => m.ClimbingMountKazbegiModule)
}, {
  path: '', component: ClimbingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClimbingRoutingModule { }
