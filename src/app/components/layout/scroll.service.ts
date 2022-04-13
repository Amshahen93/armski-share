import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ScrollService {
  scrollEvent!: Observable<number>;
  windowResize!: Observable<Event>;
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
    if(isPlatformBrowser(this.platformId)) {
      this.scrollEvent = fromEvent(window, 'scroll').pipe(map((event) => {
        return window.scrollY
      }));
      this.windowResize = fromEvent(window, 'resize');
    }
  }
}
