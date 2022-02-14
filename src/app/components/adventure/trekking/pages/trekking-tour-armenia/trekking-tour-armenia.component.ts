import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tour } from 'src/app/models/tour';
import { Trekking } from '../../data/trekking';

@Component({
  selector: 'app-trekking-tour-armenia',
  templateUrl: './trekking-tour-armenia.component.html',
  styleUrls: ['./trekking-tour-armenia.component.scss']
})
export class TrekkingTourArmeniaComponent implements OnInit {
  tourImage!: string;
  firstRout = 'trekking';
  tourName!: string;
  tourData: Tour = Trekking[0];
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
