import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { armenianHighland } from '../../../Data/tours/ski-mountaineering/tours/armenian_highland';
import { georgia } from '../../../Data/tours/ski-mountaineering/tours/georgia';
import { mountKazbegi } from '../../../Data/tours/ski-mountaineering/tours/mount_kazbegi';
import { TourData } from '../../../models/tourData';

@Component({
  selector: 'app-tours',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {
  tourImage!: string;
  firstRout!: string;
  tourName!: string;
  tourData!: TourData;
  images: string [] = [];
  pages = [{
    name: 'OVERVIEW'
  }, {
    name: 'DETAILED'
  }, {
    name: 'ACCOMMODATION'
  }, {
    name: 'PICTURES'
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

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.decideTourData();
    }
  }

  decideTourData() {
    const url = this.getLastPath();
    switch (url) {
      case 'armenian_highland':
        this.tourData = armenianHighland;
        break;
      case 'georgia':
        this.tourData = georgia;
        break;
      case 'mount_kazbegi':
        this.tourData = mountKazbegi;
        break;
    }
    this.setDataForView();
  }

  getLastPath(): string {
    let url  = location.pathname.split('/');
    url = [url[url.length - 1]];
    return url[0];
  }

  setDataForView() {
    console.log(this.tourData);
    this.tourImage = this.tourData.image;
    this.firstRout = this.tourData.groupName;
    this.tourName = this.tourData.name;
    this.createImageArray(this.tourData.images.url, this.tourData.images.count);
  }

  createImageArray(url: string, count: number) {
    if (url && count) {
      for (let i = 1; i <= count; i++) {
        this.images.push(url + '/' + i + '.jpg');
      }
    }
  }
}
