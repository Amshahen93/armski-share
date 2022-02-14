import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/models/tour';
import { Climbing } from '../adventure/climbing/data/climbing';
import { MountainBiking } from '../adventure/mountain-biking/data/mountain-biking';
import { skiMountaineeringTours } from '../adventure/ski-mountaineering/data/ski-mountaineering-tours';
import { Trekking } from '../adventure/trekking/data/trekking';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public tours: {
    tours: Tour [];
    title: string;
  } [] =  [];
  constructor() { }

  ngOnInit(): void {
    this.tours.push({
      tours: MountainBiking, 
      title: 'Mountain biking tours'
    });
    this.tours.push({
      title: 'Trekking tours',
      tours: Trekking
    });
    this.tours.push({
      title: 'Climbing tours',
      tours: Climbing
    });
    this.tours.push({
      title: 'Ski Mountaineering tours',
      tours: skiMountaineeringTours
    })
  }

}
