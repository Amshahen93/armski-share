import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ASMAComponent } from './components/asma/asma.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { VideosComponent } from './components/videos/videos.component';


const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [{
    path: 'home', component: HomeComponent
  }, {
    path: 'about', component: AboutComponent
  }, {
    path: 'gallery', loadChildren: () => 
    import('./components/gallery/gallery.module').then(m => m.GalleryModule)
  }, {
    path: 'videos', component: VideosComponent
  }, {
    path: 'asma', component: ASMAComponent
  }, {
    path: 'feedback', component: FeedbackComponent
  }, {
    path: 'tours', loadChildren: () => 
    import('./components/tours/tours.module').
    then(m => m.ToursModule)
  }, {
    path: 'armenia', loadChildren: () => 
    import('./components/armenia/armenia.module').
    then(m => m.ArmeniaModule)
  }, {
    path: 'climbing', loadChildren: () => 
    import('./components/adventure/climbing/climbing.module').
    then(m => m.ClimbingModule)
  }, {
    path: 'ski-mountaineering', loadChildren: () => 
    import('./components/adventure/ski-mountaineering/ski-mountaineering.module').
    then(m => m.SkiMountaineeringModule)
  }, {
    path: 'mountain-biking', loadChildren: () => 
    import('./components/adventure/mountain-biking/mountain-biking.module').
    then(m => m.MountainBikingModule)
  }, {
    path: 'trekking', loadChildren: () => 
    import('./components/adventure/trekking/trekking.module').
    then(m => m.TrekkingModule)
  }, {
    path: '**', redirectTo: 'home'
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
