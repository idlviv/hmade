import { Directive, HostListener, HostBinding, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appScrolling]'
})

export class ScrollingDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
        this.ChangeBgColor('red');
    }
    
    ChangeBgColor(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
    }

//   @HostBinding('style.color') color: string;

//   @HostListener('window:scroll', ['$event']) onWindowScroll(event) {
//     this.color = 'red';
//     console.log('directive');
//     // // do tracking

//     // const tracker = event.target;
//     // if ((window.innerHeight + pageYOffset) >= document.body.offsetHeight) {
//     //   console.log('youre at the bottom of the page');
//     // }
//     // const limit = tracker.scrollHeight - tracker.clientHeight;
//     // console.log(event.target.scrollTop, limit);
//     // if (event.target.scrollTop === limit) {
//     //   console.log('end reached');
//     // }
//   }

//   @HostListener('mouseover') onHover() {
//     console.log('directiveOver');
//   }

//   constructor(private elementRef: ElementRef) {
//     this.elementRef.nativeElement.style.color = 'red';
// }


}
