import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArmenianHighlandComponent } from './armenian-highland.component';


const routes: Routes = [{
  path: '', component: ArmenianHighlandComponent
}, {
  path: '**', redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArmenianHighlandRoutingModule { }
