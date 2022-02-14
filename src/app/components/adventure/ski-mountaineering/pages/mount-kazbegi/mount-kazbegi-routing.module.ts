import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MountKazbegiComponent } from './mount-kazbegi.component';


const routes: Routes = [{
  path: '', component: MountKazbegiComponent
}, {
  path: '**', redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MountKazbegiRoutingModule { }
