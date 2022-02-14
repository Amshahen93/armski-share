import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/models/tour';
import { Climbing } from '../adventure/climbing/data/climbing';
import { skiMountaineeringTours } from '../adventure/ski-mountaineering/data/ski-mountaineering-tours';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tours: Tour [] = skiMountaineeringTours;
  tours1 = Climbing;
  constructor() { }

  ngOnInit() {
    console.log(this.tours);
  }

}
