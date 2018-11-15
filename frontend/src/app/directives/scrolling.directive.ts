import { Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appScrolling]'
})
export class ScrollingDirective {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    // console.log('directive');
    // // do tracking

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

  constructor() { }


}
