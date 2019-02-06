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
  styleUrls: ['./landing.component.scss'],
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

  isElementScrolled(id) {
    const elementPosition = this.el.nativeElement.querySelector(id).offsetTop;
    return elementPosition;
  }

  _getElementPosition(id) {
    const elementPosition = this.el.nativeElement.querySelector(id).offsetTop;
    return elementPosition;
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
    const elementPosition = this._getElementPosition('#product' + this.productsPoint);
    const componentPosition = this.el.nativeElement.querySelector('#product' + this.productsPoint).offsetTop;

    const scrollPosition = window.pageYOffset;

    if (scrollPosition + window.innerHeight >= componentPosition) {
      if (this.limit > this.productsPoint) {
        this.productsPoint >= this.limit - this.portionOfProducts ?
           this.productsPoint += this.portionOfProducts :
           this.productsPoint += this.portionOfProducts - 1 ;
          }
    } else {
      this.state = false;
    }

  }

  // onScroll() {
    // this.scrollPoint.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  // }

}
