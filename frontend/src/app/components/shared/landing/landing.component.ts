import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import { CatalogService } from '../../../services/catalog.service';
import { config } from '../../../app.config';
import { ObservableMedia, FlexLayoutModule } from '@angular/flex-layout';
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
  products = <IProduct[]>[];
  mcs: IMc[];
  limit = 6;
  portionOfProducts = 3;
  productsPoint = 0;
  state = false;

  constructor(
    private catalogService: CatalogService,
    public media: ObservableMedia,
    private productService: ProductService,
    private mcService: McService,
    public el: ElementRef,
  ) { }

  ngOnInit() {
    if (this.media.isActive('xs')) {
      this.limit = 9;
      this.portionOfProducts = 3;
    } else if (this.media.isActive('sm')) {
      this.limit = 9;
      this.portionOfProducts = 3;
    } else if (this.media.isActive('md')) {
      this.limit = 9;
      this.portionOfProducts = 3;
    } else if (this.media.isActive('gt-md')) {
      this.limit = 12;
      this.portionOfProducts = 4;
    }

    this.productService.getNewProducts(this.limit)
      .subscribe(
        result => this.products = result,
        err => console.log('newProducts load error', err)
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

  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    // if ((window.innerHeight + pageYOffset) >= document.body.offsetHeight - 2) {
    //   this.productsPoint = this.products.length;
    //   console.log('positon', window.pageYOffset)
    //   // if (this.limit > this.products.length) {
    //   //   this.productService.getNewProducts(this.products.length + this.portionOfProducts)
    //   //     .subscribe(
    //   //       result => this.products = result,
    //   //       err => console.log('newProducts load error', err)
    //   //     );
    //   // }
    // }
    const componentPosition = this.el.nativeElement.querySelector('#product' + this.productsPoint).offsetTop;
    console.log('componentPosition0', componentPosition);
    console.log('componentPosition-product22', this.el.nativeElement.querySelector('#product2').offsetTop);

    console.log('productsPoint0', this.productsPoint);

    const scrollPosition = window.pageYOffset;

    if (scrollPosition + window.innerHeight >= componentPosition) {
      if (this.limit > this.productsPoint) {
        this.productsPoint >= this.limit - this.portionOfProducts ?
           this.productsPoint += this.portionOfProducts :
           this.productsPoint += this.portionOfProducts - 1 ;
        console.log('-productsPoint', this.productsPoint);
        console.log('-scrollPosition + window.innerHeight', scrollPosition + window.innerHeight);
        console.log('-componentPosition1', componentPosition);



            // this.productService.getNewProducts(this.products.length + this.portionOfProducts)
            //   .subscribe(
            //     result => this.products = result,
            //     err => console.log('newProducts load error', err)
            //   );
          }
    } else {
      this.state = false;
    }

  // console.log('componentPosition', componentPosition);
  // console.log('scrollPosition', scrollPosition);
  }

  // onScroll() {
    // this.scrollPoint.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  // }

}
