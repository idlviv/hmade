import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-screen-test',
  templateUrl: './screen-test.component.html',
  styleUrls: ['./screen-test.component.scss']
})
export class ScreenTestComponent implements OnInit, OnChanges {

  height: any;
  width: any;
  constructor() { }

  ngOnInit() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  }

  ngOnChanges(changes: SimpleChanges) {

  }

}
