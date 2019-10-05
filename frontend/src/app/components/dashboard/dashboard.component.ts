import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public state = '';

  constructor(public media: MediaObserver) { }

  ngOnInit() {
    // this.media.asObservable()
    //   .subscribe((change: MediaChange) => {
    //     this.state = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
    //   });
  }


}
