import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tour } from 'src/app/models/tour';
import { Climbing } from '../../data/climbing';

@Component({
  selector: 'app-climbing-combi',
  templateUrl: './climbing-combi.component.html',
  styleUrls: ['./climbing-combi.component.scss']
})
export class ClimbingCombiComponent implements OnInit {

  tourImage!: string;
  count = 0;
  firstRout = 'climbing';
  tourName!: string;
  tourData: Tour = Climbing[0];
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
