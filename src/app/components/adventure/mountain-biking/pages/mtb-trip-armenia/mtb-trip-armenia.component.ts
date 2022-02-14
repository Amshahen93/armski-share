import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tour } from 'src/app/models/tour';
import { MountainBiking } from '../../data/mountain-biking';

@Component({
  selector: 'app-mtb-trip-armenia',
  templateUrl: './mtb-trip-armenia.component.html',
  styleUrls: ['./mtb-trip-armenia.component.scss']
})
export class MtbTripArmeniaComponent implements OnInit {
  tourImage!: string;
  count = 0;
  firstRout = 'ski-mountaineering';
  tourName!: string;
  tourData: Tour = MountainBiking[0];
  images: string [] = [];
  pages = [{
    name: 'DESCRIPTION'
  }, {
    name: 'DETAILED'
  }, {
    name: 'PICTURES'
  }, {
    name: 'OVERVIEW'
  }];

  constructor(private _router: Router) { }

  ngOnInit() {
    this.setDataForView();
  }

  setDataForView() {
    console.log(this.tourData);
    this.tourImage = this.tourData.image;
    this.tourName = this.tourData.name;
  }

  public onBackRout() {
    this._router.navigate([this.firstRout]);
  }
}
