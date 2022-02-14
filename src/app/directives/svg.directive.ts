import { Directive, ElementRef, Input, OnChanges, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appSvg]'
})

export class SvgDirective implements OnChanges, OnDestroy {
  @Input('appSvg') svg!: string;
  newSvg!: string;
  fontSize = '20px';
  color = 'black';
  observer!: MutationObserver;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.createSVg();
    this.listenElement();
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  listenElement() {
    this.observer = new MutationObserver((mutations) => {
      this.createSVg();
    });
    this.observer.observe(this.el.nativeElement, {
      attributes: true
    });
  }

  createSVg() {
    this.getStyleFromParent();
    this.setSvgToElem();
  }

  setSvgToElem() {
    if (this.svg !== undefined) {
      this.changeColorAndSizeSvg();
      if (this.newSvg) {
        this.el.nativeElement.innerHTML = this.newSvg;
      } else {
        this.el.nativeElement.innerHTML = this.svg;
      }
    }
  }

  getStyleFromParent() {
    const elemStyle = getComputedStyle(this.el.nativeElement);
    this.fontSize = elemStyle.fontSize;
    this.color = elemStyle.color;
  }

  changeColorAndSizeSvg() {
    if (this.svg) {
      const svg = this.svg.split('<svg')[1];
      let fill = '';
      let width = 'width = "16"';
      let height = 'height = "16"';
      if (this.color) {
        fill = 'fill="' + this.color + '"';
      }
      if (this.fontSize) {
        width = 'width = "' + this.fontSize + '"';
        height = 'height = "' + this.fontSize + '"';
      }
      this.newSvg = `<svg ${fill} ${width} ${height} ${svg}`;
    }
  }
}
