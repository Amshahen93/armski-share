import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tour } from 'src/app/models/tour';
import { Climbing } from '../adventure/climbing/data/climbing';
import { skiMountaineeringTours } from '../adventure/ski-mountaineering/data/ski-mountaineering-tours';
import { Trekking } from '../adventure/trekking/data/trekking';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tours: Tour [] = skiMountaineeringTours;
  tours1: Tour [] = Climbing;
  sliderTours: Tour [] = [];
  constructor(private _router: Router) { }

  ngOnInit() {
    console.log(this.tours);
    this.sliderTours.push(skiMountaineeringTours[0], skiMountaineeringTours[1], Trekking[1])
  }

  onTour(tour: Tour) {
    console.log(tour);
    this._router.navigate([tour.parentUrl, tour.url])
  }

}
