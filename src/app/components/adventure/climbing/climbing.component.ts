import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tour } from 'src/app/models/tour';
import { Climbing } from './data/climbing';

@Component({
  selector: 'app-climbing',
  templateUrl: './climbing.component.html',
  styleUrls: ['./climbing.component.scss']
})
export class ClimbingComponent implements OnInit {
  public bigImage = '/assets/images/tours/climbing/general.jpg';
  public tourName = 'Climbing Tours';
  public tours: Tour [] = Climbing;
  constructor(private _router: Router) { }

  ngOnInit(): void {}

  public onTour(tour: Tour): void {
    console.log(['climbing', tour.url]);
    this._router.navigate(['climbing', tour.url])
  }

}
