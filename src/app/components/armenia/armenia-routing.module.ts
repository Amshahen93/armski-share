import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArmeniaComponent } from './armenia.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [{
  path: '', component: ArmeniaComponent
}, {
  path: 'blog/:id', component: BlogComponent
}, {
  path: '**', redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArmeniaRoutingModule { }
