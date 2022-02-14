import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tour } from 'src/app/models/tour';
import { skiMountaineeringTours } from '../../data/ski-mountaineering-tours';

@Component({
  selector: 'app-armenian-highland',
  templateUrl: './armenian-highland.component.html',
  styleUrls: ['./armenian-highland.component.scss']
})
export class ArmenianHighlandComponent implements OnInit {
  tourImage!: string;
  firstRout = 'ski-mountaineering';
  tourName!: string;
  tourData: Tour = skiMountaineeringTours[2];
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
