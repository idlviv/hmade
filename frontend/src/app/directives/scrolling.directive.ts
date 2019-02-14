import { Directive, HostListener, HostBinding, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appScrolling]'
})

export class ScrollingDirective {
  constructor(
      private el: ElementRef,
    ) {
    }

  isElementOnScreen(elem) {
    // elem.getBoundingClientRect(); видима обасть екрану до елемента
    // pageYOffset верх сторінки до верху видимой обасті
    // innerHeight висота видимої області
    const box = elem.getBoundingClientRect();
    const screenTop = pageYOffset;
    const screenBottom = pageYOffset + innerHeight;
    const elementTop = box.top + pageYOffset;
    const elementBottom = box.bottom + pageYOffset;
    if ((elementTop > screenTop && elementTop < screenBottom) ||
        (elementBottom > screenTop && elementBottom < screenBottom)) {
      return true;
    } else {
      return false;
    }
  }


  @HostListener('window:scroll', ['$event']) onWindowScroll(event): void {
    const elem = this.el.nativeElement;

    if (this.isElementOnScreen(elem)) {
      // elem.classList.add('appear');
    }
  }

}
