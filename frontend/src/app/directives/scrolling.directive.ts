import { Directive, HostListener, HostBinding, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appScrolling]'
})

export class ScrollingDirective {
  constructor(
      private el: ElementRef,
      // private renderer: Renderer
    ) {
    }
    
  //   ChangeBgColor(color: string) {
  //       this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
  //   }

//   @HostBinding('style.color') color: string;

  @HostListener('window:scroll', ['$event']) onWindowScroll(event) {
    // this.color = 'red';
    // // do tracking
    const elementPosition = this.el.nativeElement.offsetTop;
    const elementHeight = this.el.nativeElement.offsetHeight;

    const scrollPosition = window.pageYOffset;
    // && scrollPosition + window.innerHeight <= elementPosition + elementHeight
    if (scrollPosition + window.innerHeight >= elementPosition) {
      console.log('directive', scrollPosition + window.innerHeight);
      console.log('elementPosition', elementPosition);
      console.log('elementPosition + elementHeight', elementPosition + elementHeight);


    }
    // const tracker = event.target;
    // if ((window.innerHeight + pageYOffset) >= document.body.offsetHeight) {
    //   console.log('youre at the bottom of the page');
    // }
    // const limit = tracker.scrollHeight - tracker.clientHeight;
    // console.log(event.target.scrollTop, limit);
    // if (event.target.scrollTop === limit) {
    //   console.log('end reached');
    // }
  }

  // @HostListener('mouseover') onHover() {
  //   console.log('directiveOver');
  // }

//   constructor(private elementRef: ElementRef) {
//     this.elementRef.nativeElement.style.color = 'red';
// }


}
