import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import { CatalogService } from '../../../services/catalog.service';
import { config } from '../../../app.config';
import { ObservableMedia } from '@angular/flex-layout';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/product-interface';
import { IMc } from 'src/app/interfaces/interface';
import { McService } from 'src/app/services/mc.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as aos from 'aos';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})

export class LandingComponent implements OnInit {
  @ViewChild('scrollPoint') scrollPoint: ElementRef;
  config = config;
  products = <IProduct[]>[];
  mcs: IMc[];
  limit = 6;
  portionOfProducts = 3;
  productsPoint = 0;
  state = 'hide';

  screenTop: any;
  screenBottom: any;

  elementTop: any;
  elementBottom: any;

  checkElemOnscreen: any;
  elemClassList: any;

  avatarLoading = true;

  constructor(
    private catalogService: CatalogService,
    public media: ObservableMedia,
    private productService: ProductService,
    private mcService: McService,
    public el: ElementRef,
  ) { }

  ngOnInit() {
    aos.init();

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
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }

  }

  onAvatarLoaded() {
    this.avatarLoading = false;
  }
}
