import { Injectable } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ScrollService {
  scrollEvent = fromEvent(window, 'scroll').pipe(map((event) => {
    return window.scrollY
  }));
  windowResize = fromEvent(window, 'resize');
  constructor() { }
}
