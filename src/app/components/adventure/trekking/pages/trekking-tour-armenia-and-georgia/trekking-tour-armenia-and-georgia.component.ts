import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tour } from 'src/app/models/tour';
import { Trekking } from '../../data/trekking';

@Component({
  selector: 'app-trekking-tour-armenia-and-georgia',
  templateUrl: './trekking-tour-armenia-and-georgia.component.html',
  styleUrls: ['./trekking-tour-armenia-and-georgia.component.scss']
})
export class TrekkingTourArmeniaAndGeorgiaComponent implements OnInit {
  tourImage!: string;
  firstRout = 'ski-mountaineering';
  tourName!: string;
  tourData: Tour = Trekking[1];
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
