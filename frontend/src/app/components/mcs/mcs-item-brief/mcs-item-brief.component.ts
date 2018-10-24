import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mcs-item-brief',
  templateUrl: './mcs-item-brief.component.html',
  styleUrls: ['./mcs-item-brief.component.scss']
})
export class McsItemBriefComponent implements OnInit {

  @Input() mc;

  constructor() { }

  ngOnInit() {
  }

}
