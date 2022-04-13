import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, AfterViewInit, Renderer2, Input, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ScrollService } from '../components/layout/scroll.service';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective implements AfterViewInit, OnDestroy {
  style = '';
  fromTop = 0;
  @Input() pages!: {name: string} [];
  @Input() elements!: HTMLElement[];
  buttonsContent!: HTMLElement;
  buttonsList: HTMLElement [] = [];
  classAdded = false;
  resizeListener!: Subscription;
  buttonListeners: (() => void) [] = [];
  offsetTop: number [] = [];
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private scrollService: ScrollService,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.allFunctionality();
    }
  }

  allFunctionality() {
    setTimeout(() => {
      this.setStyleToElement();
      this.getSpaceBetweenTop();
      this.createInnerElements();
      this.listenerForResize();
      setTimeout(() => {
        this.getElementsOffsetTop();
        if (this.elements && this.elements[0]) {
          this.createWindowScrollEventListener();
          this.getElementsOffsetTop();
        }
      }, 500);
    }, 100);
  }

  ngOnDestroy() {
    if (this.resizeListener) {
      this.resizeListener.unsubscribe();
    }
    for (const iterator of this.buttonListeners) {
      if (iterator) {
        iterator();
      }
    }
  }

  createWindowScrollEventListener() {
    this.scrollService?.scrollEvent.subscribe(el => {
      if (this.fromTop < el) {
        this.addPositionFixed();
      } else {
        this.removePositionFixed();
      }
      this.decideActiveElement(el);
    });
  }

  getSpaceBetweenTop() {
    this.fromTop = this.el.nativeElement.offsetTop;
  }

  setStyleToElement() {
    this.renderer.setAttribute(this.el.nativeElement, 'class', 'parallaxContainer');
  }

  addPositionFixed() {
    this.classAdded = true;
    this.renderer.addClass(this.el.nativeElement, 'fixed');
  }

  removePositionFixed() {
    if (this.classAdded) {
      this.renderer.removeClass(this.el.nativeElement, 'fixed');
      this.classAdded = false;
    }
  }

  listenerForResize() {
   this.resizeListener = this.scrollService?.windowResize.subscribe(size => {
      this.getSpaceBetweenTop();
    });
  }

  createInnerElements() {
    this.buttonsContent = this.createElementWitClass('div', 'row');
    if (this.pages) {
      for (let i = 0; i < this.pages.length; i++) {
        this.createElement(this.pages[i].name, i);
      }
      const container = this.createElementWitClass('div', 'container');
      this.renderer.appendChild(container, this.buttonsContent);
      this.renderer.appendChild(this.el.nativeElement, container);
    }
  }

  createElement(name: string, i: number) {
    const elem: HTMLElement = this.createElementWitClass('div', `p-0 position-relative ${
      this.pages.length === 5 || this.pages.length === 6 ? 'col-2' :
      this.pages.length === 4 ? 'col-3' : this.pages.length === 3 ? 'col-4' :
      this.pages.length === 2 ? 'col-6' : 'col-12'}`);
    const parallaxButton = this.createElementWitClass('div', 'parallaxButton');
    const activeElement = this.createElementWitClass('div', 'activeElement');
    parallaxButton.innerHTML = name;
    this.renderer.appendChild(elem, parallaxButton);
    this.renderer.appendChild(elem, activeElement);
    this.renderer.appendChild(this.buttonsContent, elem);
    this.buttonsList.push(elem);
    this.buttonListeners[i] = this.renderer.listen(elem, 'click', () => {
      this.clickOnButton(i);
    });
  }

  clickOnButton(index: number) {
    if (this.elements[index]) {
      this.elements[index].scrollIntoView({block: 'start'});
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({top: window.scrollY - 90});
      }
    }
    this.setActiveClassToButton(index);
  }

  createElementWitClass(elemName: string, classNaem: string): HTMLElement {
    const elem: HTMLElement = this.renderer.createElement(elemName);
    this.renderer.setAttribute(elem, 'class', classNaem);
    return elem;
  }

  setActiveClassToButton(index?: number) {
    for (const button of this.buttonsList) {
      if (button.className.includes('activeButton')) {
        this.renderer.removeClass(button, 'activeButton');
      }
    }
    if (index !== undefined) {
      this.renderer.addClass(this.buttonsList[index], 'activeButton');
    }
  }

  getElementsOffsetTop() {
    if (this.elements) {
      for (let i = 0; i < this.elements.length; i++) {
        this.offsetTop[i] = this.elements[i].offsetTop;
      }
    }
  }

  decideActiveElement(scroll: number) {
    for (let i = this.offsetTop.length; i > -1; i--) {
      if (this.offsetTop[i] < scroll + 180) {
        this.setActiveClassToButton(i);
        i = -1;
      } else if (scroll === 0) {
        this.setActiveClassToButton();
      }
    }
  }

}
