import { Component, OnInit } from '@angular/core';
import { config } from '../../../app.config';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  config = config;
  iconFilename: string;
  faviconFilename: string;
  logoFilename: string;

  constructor() { }

  ngOnInit() {
    this.iconFilename = config.icon + '.png';
    this.faviconFilename = config.icon + '.ico';
    this.logoFilename = config.logoDark + '.svg';
  }
}
