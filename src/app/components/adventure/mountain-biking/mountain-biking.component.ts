import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tour } from 'src/app/models/tour';
import { MountainBiking } from './data/mountain-biking';

@Component({
  selector: 'app-mountain-biking',
  templateUrl: './mountain-biking.component.html',
  styleUrls: ['./mountain-biking.component.scss']
})

export class MountainBikingComponent implements OnInit {
  public bigImage = '/assets/images/tours/mtb/general.jpg';
  public tourName = 'MTB Tours';
  public tours: Tour [] = MountainBiking;
  constructor(private _router: Router) { }

  ngOnInit(): void {}

  public onTour(tour: Tour): void {
    this._router.navigate(['mountain-biking', tour.url])
  }

}
