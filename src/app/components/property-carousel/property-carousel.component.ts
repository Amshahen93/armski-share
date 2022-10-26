import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { Tour } from 'src/app/models/tour';

@Component({
  selector: 'app-property-carousel',
  templateUrl: './property-carousel.component.html',
  styleUrls: ['./property-carousel.component.scss'],
})
export class PropertyCarouselComponent
  implements OnInit, AfterViewInit, OnChanges {
  public customOptions: OwlOptions = {
    autoplaySpeed: 500,
    smartSpeed: 500,
    margin: 20,
    autoWidth: true,
    dots: false
  };
  @ViewChild('owlCar') owlCar!: CarouselComponent;
  @Input() data: Tour[] = [];
  @Output() unitId: EventEmitter<string> = new EventEmitter();
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.setSliderProperties();
  }


  ngAfterViewInit(): void {
    this.setSliderProperties();
  }

  setSliderProperties() {
    if (this.data.length >= 2) {
      this.customOptions = {
        loop: true,
        items: 1,
        center: true,
        autoplay: true,
        autoplaySpeed: 600,
        autoplayTimeout: 6000
      };
    } else {
      this.customOptions = {
        navSpeed: 500,
        dotsSpeed: 500,
        smartSpeed: 500,
        items: 1,
        center: true,
        touchDrag: false,
        mouseDrag: false,
      };
    }
  }

  onSliderArrow(side: 'left' | 'right') {
    if (side === 'left') {
      this.owlCar.prev();
    } else if (side === 'right') {
      this.owlCar.next();
    }
  }
  public outputUnitId(unitId: string) {
    this.unitId.emit(unitId);
  }

  public onTour(tour: Tour) {
    this._router.navigate([tour.parentUrl, tour.url]);
  }
}
