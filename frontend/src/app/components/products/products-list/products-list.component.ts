import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../interfaces/product-interface';
import { CatalogService } from '../../../services/catalog.service';
import { ICatalog } from '../../../interfaces/catalog-interface';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: IProduct[];
  category_id: string;
  children: string;
  category: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private catalogService: CatalogService,
  ) { }

  ngOnInit() {
   this.refreshProducts();
  }

  refreshProducts() {
    this.route.paramMap.pipe(
      mergeMap(param => {
        this.category_id = param.get('category_id');
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
          console.log('this.category_id', this.category_id);
          return this.catalogService.getChildren(this.category_id);
        }
      }),
      mergeMap(children => {
        this.children = children.data;
        if (!this.children.length) {
          // if no children - show products
          return this.productService.getProductsByParent(this.category_id, 'products', true);
        } else {
          return this.productService.getProductsByParent(null, 'products', true);
        }
      }))
      .subscribe(
        products => this.products = products.data,
        err => console.log('error', err)
      );
  }
}
