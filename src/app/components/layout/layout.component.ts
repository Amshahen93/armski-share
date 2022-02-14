import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  headerWidth!: number;
  @ViewChild('scrollElement') screlableElement!: ElementRef;

  constructor(private scrollService: ScrollService, private renderer: Renderer2) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.listenerForResize();
    this.listenWindowScroll();
  }

  listenerForResize() {
    this.renderer.listen('window', 'resize', () => {
      if (this.screlableElement) {
        // this.scrollService.windowResize.next(this.screlableElement.nativeElement.clientWidth);
      }
    });
  }

  listenWindowScroll() {
    // this.renderer.listen(, 'scroll', event => {
    //   // this.scrollService.scrollEvent.next(window.scrollY);
    // });
  }
}
