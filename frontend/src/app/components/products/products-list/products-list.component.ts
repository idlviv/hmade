import { Component, OnInit, HostListener } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../interfaces/product-interface';
import { CatalogService } from '../../../services/catalog.service';
import { ObservableMedia } from '@angular/flex-layout';
// import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products = <IProduct[]>[];
  category_id: string;
  children: string;
  category: any;
  processing = false;
  totalProductsLength = 0;
  portionOfProducts: number;
  skip: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private catalogService: CatalogService,
    public media: ObservableMedia,
    // private titleService: Title,
    // private metaService: Meta
  ) { }

  ngOnInit() {

    if (this.media.isActive('xs')) {
      this.portionOfProducts = 3;
      this.refreshProducts(-1, this.products.length, this.portionOfProducts);
    } else if (this.media.isActive('sm')) {
      this.portionOfProducts = 6;
      this.refreshProducts(-1, this.products.length, this.portionOfProducts);
    } else if (this.media.isActive('md')) {
      this.portionOfProducts = 6;
      this.refreshProducts(-1, this.products.length, this.portionOfProducts);
    } else if (this.media.isActive('gt-md')) {
      this.portionOfProducts = 8;
      this.refreshProducts(-1, this.products.length, this.portionOfProducts);
    }
  }

  // Listening of page bottom reached
  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    if ((window.innerHeight + pageYOffset) >= document.body.offsetHeight - 300) {
      if (
        !this.processing &&
        this.totalProductsLength > this.products.length &&
        this.totalProductsLength
      ) {
        this.refreshProducts(-1, this.products.length, this.portionOfProducts);
      }
    }
  }

  refreshProducts(sort: number, skip: number, limit: number) {
    this.processing = true;
    // const $queryParamMap = this.route.queryParamMap;
    // const $paramMap = this.route.paramMap;

    this.route.paramMap.pipe(
      mergeMap(param => {
        this.category_id = param.get('category_id');
        console.log('this.category_id', this.category_id);
        if (!this.category_id) {
          // starting from root
          return of(null);
        }
        // starting from selected category
        return this.catalogService.getCategoryById(this.category_id);
      }),
      mergeMap(category => {
        if (!category) {
          // get children of root
          return this.catalogService.getChildren('products');
        } else {
          this.category = category.data;
          // get children of selected category
          return this.catalogService.getChildren(this.category_id);
        }
      }),
      mergeMap(children => {
        this.children = children.data;
        if (!this.children.length) {
          // if no children - show products
          this.skip = skip;
          return this.productService.getProductsByParent(this.category_id, 'products', true, sort, skip, limit);
        } else {
          this.products = [];
          return this.productService.getProductsByParent(null, 'products', true, sort, skip, limit);
        }
      }))
      .subscribe(result => {
        this.totalProductsLength = result[0].total ? result[0].total.totalProductsLength : 0;
        this.products.push(...result[0].products);
        this.processing = false;
      },
        err => console.log('error', err.e)
      );
  }
}
