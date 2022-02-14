import { Directive, ElementRef, Input, Renderer2, OnDestroy } from '@angular/core';
import { closeSvg } from '../SVGs/close';
import { toRight } from '../SVGs/toRight';
import { toLeft } from '../SVGs/toLeft';

@Directive({
  selector: '[appImageZoom]'
})
export class ImageZoomDirective implements OnDestroy {
  @Input('appImageZoom') url!: {url: string; smallUrl: string; alt: string; id: number};
  @Input() images!: ({url: string; smallUrl: string; alt: string;} []);
  clickListener!: () => void;
  popupElement!: HTMLElement;
  closeListener!: () => void;
  imageElementListener!: () => void;
  img!: HTMLElement;
  imageIsZoomed = 0;
  imageIndex = 0;
  imageTurnLeftListener!: () => void;
  imageButtonLeft!: HTMLElement;
  imageButtonRight!: HTMLElement;
  imageTurnRightListener!: () => void;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.listenOnImageClick();
  }

  ngOnDestroy() {
    this.clickListener();
    if (this.imageTurnLeftListener) {
      this.imageTurnLeftListener();
    }
    if (this.imageElementListener) {
      this.imageElementListener();
    }
    if (this.imageTurnRightListener) {
      this.imageTurnRightListener();
    }
  }

  listenOnImageClick() {
    this.clickListener = this.renderer.listen(this.el.nativeElement, 'click', () => {
      this.createPopupElement();
      this.createListenerForClosePopup();
      // this.decideImageIndex();
    });
  }

  createPopupElement() {
    this.createImageElem(this.url.url);
    this.popupElement = this.createElement(
      'div',
      [{name: 'class', value: 'image-popup'}],
      [this.img, this.createCloseIcon()]
    );
    this.renderer.appendChild(document.body, this.popupElement);
    this.hddenBodyScroll();
  }

  createImageElem(url: string) {
    this.img = this.createElement('img', [{name: 'class', value: 'image-popup-element unselectable'}, {name: 'src', value: url}]);
    this.imageElementListener = this.renderer.listen(this.img, 'click', (event) => {
      event.stopPropagation();
      console.log('ddddd');
      this.onZoomImage();
    });
  }

  createCloseIcon() {
    const divideSvg = closeSvg.split('<svg ');
    const newSvg = '<svg ' + 'fill="#5A564F" width="30px" height="30px"' + divideSvg[1];
    const icon = this.createElement(
      'div',
      [{name: 'class', value: 'popup-close-icon d-flex justify-content-center align-items-center'}],
      newSvg
    );
    return icon;
  }

  createListenerForClosePopup() {
    this.closeListener = this.renderer.listen(this.popupElement, 'click', () => {
      this.deleteElement();
      this.imageElementListener();
      this.closeListener();
      this.openBodyScroll();
    });
  }

  hddenBodyScroll() {
    this.renderer.addClass(document.body, 'scrollHidden');
  }

  openBodyScroll() {
    this.renderer.removeClass(document.body, 'scrollHidden');
  }

  deleteElement() {
    this.renderer.removeChild(document.body, this.popupElement, true);
  }

  onZoomImage() {
    if (this.imageIsZoomed === 0) {
      this.renderer.addClass(this.img, 'big-image1');
      this.imageIsZoomed = 1;
    } else if (this.imageIsZoomed === 1) {
      this.renderer.removeClass(this.img, 'big-image1');
      this.renderer.addClass(this.img, 'big-image2');
      this.imageIsZoomed = 2;
    } else {
      this.renderer.removeClass(this.img, 'big-image2');
      this.imageIsZoomed = 0;
    }
  }

  createElement(tagname: string, atrs?: {name: string; value: string} [], value?: string | HTMLElement | HTMLElement []): HTMLElement {
    const elem = this.renderer.createElement(tagname);
    if (atrs) {
      for (let i = 0; i < atrs.length; i++) {
        this.renderer.setAttribute(elem, atrs[i].name , atrs[i].value);
      }
    }
    if (value) {
      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          this.renderer.appendChild(elem, value[i]);
        }
      } else if (typeof value === 'string') {
        elem.innerHTML = value;
      } else {
        this.renderer.appendChild(elem, value);
      }
    }
    return elem;
  }

  // decideImageIndex() {
  //   if (this.images) {
  //     this.createImagesButtons();
  //     for (let i = 0; i < this.images.length; i++) {
  //       if (this.images[i].id === this.url.id) {
  //         this.imageIndex = i;
  //         this.checkForRightButton();
  //         this.checkForLeftButton();
  //         i = Infinity;
  //       }
  //     }
  //   }
  // }

  createImagesButtons() {
    const leftIcon = '<svg ' + 'class="turn-icon"' + toLeft.split('<svg')[1];
    this.imageButtonLeft = this.createElement(
      'div',
      [{name: 'class', value: 'turn-button left-button'}],
      leftIcon
    );
    const rightIcon = '<svg ' + 'class="turn-icon"' + toRight.split('<svg')[1];
    this.imageButtonRight = this.createElement(
      'div',
      [{name: 'class', value: 'turn-button right-button'}],
      rightIcon
    );

    this.imageTurnLeftListener = this.renderer.listen(this.imageButtonLeft, 'click', event => {
      event.stopPropagation();
      if (this.imageIndex > 0) {
        this.zoomOut();
        this.imageIndex --;
        this.img.setAttribute('src', this.images[this.imageIndex].url);
      }
      this.checkForLeftButton();
      this.checkForRightButton();
    });

    this.imageTurnRightListener = this.renderer.listen(this.imageButtonRight, 'click', event => {
      event.stopPropagation();
      if (this.imageIndex < this.images.length - 1) {
        this.zoomOut();
        this.imageIndex ++;
        console.log(this.images[this.imageIndex]);
        this.img.setAttribute('src', this.images[this.imageIndex].url);
      }
      this.checkForRightButton();
      this.checkForLeftButton();
    });
    this.renderer.appendChild(this.popupElement, this.imageButtonLeft);
    this.renderer.appendChild(this.popupElement, this.imageButtonRight);
  }

  checkForRightButton() {
    if (this.imageIndex >= this.images.length - 1) {
      this.renderer.addClass(this.imageButtonRight, 'hidden-button');
    } else if (this.imageButtonRight.classList.contains('hidden-button')) {
      this.renderer.removeClass(this.imageButtonRight, 'hidden-button');
    }
  }

  checkForLeftButton() {
    if (this.imageIndex === 0) {
      this.renderer.addClass(this.imageButtonLeft, 'hidden-button');
    } else if (this.imageButtonLeft.classList.contains('hidden-button')) {
      this.renderer.removeClass(this.imageButtonLeft, 'hidden-button');
    }
  }

  zoomOut() {
    this.imageIsZoomed = 0;
    this.onZoomImage();
    if (this.img.classList.contains('big-image1')) {
      this.renderer.removeClass(this.img, 'big-image1');
    }
    if (this.img.classList.contains('big-image2')) {
      this.renderer.removeClass(this.img, 'big-image2');
    }
  }

}
