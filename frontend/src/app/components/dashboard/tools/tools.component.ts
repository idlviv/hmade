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
    this.iconFilename = config.logoLight + '.png';
    this.faviconFilename = config.logoLight + '.png';
    this.logoFilename = config.logoLight + '.png';
  }
}
