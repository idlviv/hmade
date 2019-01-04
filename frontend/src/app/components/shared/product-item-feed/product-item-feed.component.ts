import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product-interface';
import { config } from '../../../app.config';

@Component({
  selector: 'app-product-item-feed',
  templateUrl: './product-item-feed.component.html',
  styleUrls: ['./product-item-feed.component.scss']
})
export class ProductItemFeedComponent implements OnInit {
  @Input() product: IProduct;
  config = config;

  constructor() { }

  ngOnInit() {
  }

}
