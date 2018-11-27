import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CatalogService } from '../../../services/catalog.service';
import { config } from '../../../app.config';
import { ObservableMedia } from '@angular/flex-layout';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/product-interface';
import { IMc } from 'src/app/interfaces/interface';
import { McService } from 'src/app/services/mc.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @ViewChild('scrollPoint') scrollPoint: ElementRef;
  config = config;
  products: IProduct[];
  mcs: IMc[];
  // descendants: any;


  constructor(
    private catalogService: CatalogService,
    public media: ObservableMedia,
    private productService: ProductService,
    private mcService: McService,
  ) { }

  ngOnInit() {
    this.productService.getMainPageProducts()
      .subscribe(
        result => this.products = result,
        err => console.log('mainPageProducts load error', err)
      );

    this.mcService.getMainPageMcs()
      .subscribe(
        result => this.mcs = result,
        err => console.log('mainPageMcs load error', err)
      );
    // this.catalogService.getChildren('products')
      // .subscribe(
      //   result => this.descendants = result.data,
      //   err => console.log('mainPageProducts load error', err)
      // );
  }

  onScroll() {
    // this.scrollPoint.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

}
