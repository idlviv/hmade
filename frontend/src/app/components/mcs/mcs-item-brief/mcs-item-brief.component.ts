import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { config } from '../../../app.config';

@Component({
  selector: 'app-mcs-item-brief',
  templateUrl: './mcs-item-brief.component.html',
  styleUrls: ['./mcs-item-brief.component.scss']
})
export class McsItemBriefComponent implements OnInit, OnChanges {

  config = config;
  @Input() mc;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const productChange: SimpleChange = changes.mc;
    console.log('prev value: ', productChange.previousValue);
    console.log('got name: ', productChange.currentValue);
    console.log('productChange: ', productChange);
    if (productChange) {
      console.log('simple changes product');
      // this.getRecommendations();
    }
  }

}
