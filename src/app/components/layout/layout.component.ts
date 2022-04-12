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
  @ViewChild('container') container!: ElementRef<HTMLDListElement>;
  constructor(private scrollService: ScrollService, private renderer: Renderer2) { }

  ngOnInit() {}

  ngAfterViewInit() {
    // this.listenerForResize();
    this.listenWindowScroll();
  }


  listenWindowScroll() {
    // this.renderer.listen(, 'scroll', event => {
    //   // this.scrollService.scrollEvent.next(window.scrollY);
    // });
  }

  onContact() {
    scrollTo({
      top: this.container.nativeElement.clientHeight
    })
  }
}
