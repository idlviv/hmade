import { Component, OnInit, Input } from '@angular/core';
import { config } from '../../../app.config';

@Component({
  selector: 'app-mcs-item-brief',
  templateUrl: './mcs-item-brief.component.html',
  styleUrls: ['./mcs-item-brief.component.scss']
})
export class McsItemBriefComponent implements OnInit {

  config = config;
  @Input() mc;

  constructor() { }

  ngOnInit() {
  }

}
