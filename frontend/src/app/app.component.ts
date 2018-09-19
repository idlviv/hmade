import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showHeader = false;

  constructor(
     private router: Router,
   ) { }

  ngOnInit() {
  //   this.router.events.pipe(
  //     filter(event => event instanceof NavigationStart)
  //   )
  //     .subscribe((event: NavigationStart) => {
  //       this.showHeader = !(event.url === '/');
  //     });
  }
}
