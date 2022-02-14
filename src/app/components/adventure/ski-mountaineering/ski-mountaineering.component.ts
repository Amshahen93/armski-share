import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tour } from 'src/app/models/tour';
import { skiMountaineeringTours } from './data/ski-mountaineering-tours';

@Component({
  selector: 'app-ski-mountaineering',
  templateUrl: './ski-mountaineering.component.html',
  styleUrls: ['./ski-mountaineering.component.scss']
})
export class SkiMountaineeringComponent implements OnInit {
  public bigImage = '/assets/images/tours/ski-mountaineering/big.jpg';
  public tourName = 'Ski mountaineering tours';
  public   tours: Tour [] = skiMountaineeringTours;
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public onTour(tour: Tour): void {
    this._router.navigate(['ski-mountaineering', tour.url])
  }

}
