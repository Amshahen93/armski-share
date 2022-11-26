import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { skiMountaineering } from '../../Data/tours/ski-mountaineering/ski-mountaineering';


@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit, OnDestroy {
  routerSubscription!: Subscription;
  toursType!: string;
  urlArray!: string [];
  allTours = {
    mountain_biking: 'Mountain Biking',
    trekking : 'Trekking tours',
    climbing: 'Climbing tours',
    hiking: 'Hiking tours',
    ski_mountaineering: 'Ski mountaineering tours',
    cycling: 'Cycling tours',
    discovery_Armenia: 'Discovery tours Armenia',
    discovery_Georgia: 'Discovery tours Georgia',
    discovery_Arcakh: 'Discovery tours Arcakh'
  };
  bigImage = '/assets/images/home.jpg';
  tours = [{
    name: 'loremipsum',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, suscipit?',
    image: 'assets/images/tours.jpg',
    url: 'loremipsum'
  }, {
    name: 'lorem ipsum',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, suscipit?',
    image: 'assets/images/tours.jpg',
    url: 'loremipsum'
  }, {
    name: 'lorem ipsum',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, suscipit?',
    image: 'assets/images/tours.jpg',
    url: 'loremipsum'
  }, {
    name: 'lorem ipsum',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, suscipit?',
    image: 'assets/images/tours.jpg',
    url: 'loremipsum'
  }, {
    name: 'lorem ipsum',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, suscipit?',
    image: 'assets/images/tours.jpg',
    url: 'loremipsum'
  }];
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.subscribeOnRout();
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  subscribeOnRout() {
    this.routerSubscription = this.router.events.subscribe( event => {
      if (event instanceof ActivationEnd && event.snapshot.params.name) {
        this.toursType = event.snapshot.params.name;
        this.urlArray = [];
        event.snapshot.url.forEach(elem => {
          this.urlArray.push(elem.path);
        });
        this.getTourData();
      }
    });
  }

  createTourDirectoryFromName(name: string): string [] {
    const urlArray = [...this.urlArray];
    urlArray.push(name);
    urlArray.unshift('tours');
    return urlArray;
  }

  onTour(tour: any) {
    this.router.navigate(this.createTourDirectoryFromName(tour.url));
  }

  getTourData() {
    const tour = location.pathname.split('/')[3];
    console.log('get data');
    switch (tour) {
      case 'ski_mountaineering':
        this.bigImage = skiMountaineering.bigImage;
        this.tours = skiMountaineering.tours;
        console.log(this.tours);
        break;
      case '':
        break;
      case null:
        break;
      case null:
        break;
      case null:
        break;
      case null:
        break;
      case null:
        break;
      case null:
        break;
      case null:
        break;
    }
  }

}
