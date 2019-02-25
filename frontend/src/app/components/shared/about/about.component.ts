import { Component, OnInit } from '@angular/core';
import { config } from '../../../app.config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  config = config;

  constructor() { }

  ngOnInit() {
  }

}
