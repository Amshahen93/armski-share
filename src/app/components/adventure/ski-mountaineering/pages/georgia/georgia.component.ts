import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tour } from 'src/app/models/tour';
import { skiMountaineeringTours } from '../../data/ski-mountaineering-tours';

@Component({
  selector: 'app-georgia',
  templateUrl: './georgia.component.html',
  styleUrls: ['./georgia.component.scss']
})
export class GeorgiaComponent implements OnInit {
  tourImage!: string;
  count = 0;
  firstRout = 'ski-mountaineering';
  tourName!: string;
  tourData: Tour = skiMountaineeringTours[1];
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

  trips = [{
    title: 'Challenging Atlas Mountain Family Trek',
    image: 'assets/images/home.jpg',
    description: "A challenging family holiday for children aged 12+. Spend four days trekking in the Toubkal National Park, culminating in a summit attempt of North Africa's highest mountain, followed by two days exploring the bustling medina of Marrakech.",
    price: '470',
    duration: '8 day'
  }, {
    title: 'Challenging Atlas Mountain Family Trek',
    image: 'assets/images/home.jpg',
    description: "A challenging family holiday for children aged 12+. Spend four days trekking in the Toubkal National Park, culminating in a summit attempt of North Africa's highest mountain, followed by two days exploring the bustling medina of Marrakech.",
    price: '470',
    duration: '8 day'
  }, {
    title: 'Challenging Atlas Mountain Family Trek',
    image: 'assets/images/home.jpg',
    description: "A challenging family holiday for children aged 12+. Spend four days trekking in the Toubkal National Park, culminating in a summit attempt of North Africa's highest mountain, followed by two days exploring the bustling medina of Marrakech.",
    price: '470',
    duration: '8 day'
  }, {
    title: 'Challenging Atlas Mountain Family Trek',
    image: 'assets/images/home.jpg',
    description: "A challenging family holiday for children aged 12+. Spend four days trekking in the Toubkal National Park, culminating in a summit attempt of North Africa's highest mountain, followed by two days exploring the bustling medina of Marrakech.",
    price: '470',
    duration: '8 day'
  }, {
    title: 'Challenging Atlas Mountain Family Trek',
    image: 'assets/images/home.jpg',
    description: "A challenging family holiday for children aged 12+. Spend four days trekking in the Toubkal National Park, culminating in a summit attempt of North Africa's highest mountain, followed by two days exploring the bustling medina of Marrakech.",
    price: '470',
    duration: '8 day'
  }];
  accommodations = [{
    image: '/assets/images/accommodation.jpg',
    title: 'Lorem, ipsum dolor.',
    location: 'Lorem, ipsum.',
    rating: '7',
    have: ['- 4/5 Bedroom Villa', '- Private Pool', '- Private Garden and Roof Terrace', '- Walking Distance from Beach']
  }, {
    image: '/assets/images/accommodation.jpg',
    title: 'Lorem, ipsum dolor.',
    location: 'Lorem, ipsum.',
    rating: '8',
    have: ['- 4/5 Bedroom Villa', '- Private Pool', '- Private Garden and Roof Terrace', '- Walking Distance from Beach']
  }, {
    image: '/assets/images/accommodation.jpg',
    title: 'Lorem, ipsum dolor.',
    location: 'Lorem, ipsum.',
    rating: '8',
    have: ['- 4/5 Bedroom Villa', '- Private Pool', '- Private Garden and Roof Terrace', '- Walking Distance from Beach']
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

  public test(): boolean {
    // console.log(this.count++)
    return true;
  }

}
