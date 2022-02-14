import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkiMountaineeringComponent } from './ski-mountaineering.component';


const routes: Routes = [{
  path: 'armenian-highland', loadChildren: () => 
  import('./pages/armenian-highland/armenian-highland.module').
  then(m => m.ArmenianHighlandModule)
}, {
  path: 'georgia', loadChildren: () => 
  import('./pages/georgia/georgia.module').then(m => m.GeorgiaModule)
}, {
  path: 'mount-kazbegi', loadChildren: () => 
  import('./pages/mount-kazbegi/mount-kazbegi.module').
  then(m => m.MountKazbegiModule)
}, {
  path: '', component: SkiMountaineeringComponent
}, {
  path: '**', redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkiMountaineeringRoutingModule { }
