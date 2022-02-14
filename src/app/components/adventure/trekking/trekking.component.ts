import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tour } from 'src/app/models/tour';
import { Trekking } from './data/trekking';

@Component({
  selector: 'app-trekking',
  templateUrl: './trekking.component.html',
  styleUrls: ['./trekking.component.scss']
})
export class TrekkingComponent implements OnInit {
  public bigImage = '/assets/images/tours/trekking/general.jpg';
  public tourName = 'Trekking Tours';
  public tours: Tour [] = Trekking;
  constructor(private _router: Router) { }

  ngOnInit(): void {}

  public onTour(tour: Tour): void {
    console.log(['trekking', tour.url]);
    this._router.navigate(['trekking', tour.url])
  }


}
