import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  headerWidth!: number;
  @ViewChild('container') container!: ElementRef<HTMLDListElement>;
  constructor() { }

  ngOnInit() {}


  onContact() {
    scrollTo({
      top: this.container.nativeElement.clientHeight
    })
  }
}
