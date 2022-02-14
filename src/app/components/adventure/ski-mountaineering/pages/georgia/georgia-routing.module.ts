import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeorgiaComponent } from './georgia.component';


const routes: Routes = [{
  path: '', component: GeorgiaComponent
}, {
  path: '**', redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeorgiaRoutingModule { }
