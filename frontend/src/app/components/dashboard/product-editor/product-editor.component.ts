import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/index';
import { mergeMap } from 'rxjs/operators';
import { CatalogService, ICatalog } from 'ng-user-man';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { config } from '../../../app.config';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {
  children = [];
  catalogForm: FormGroup;
  products: any;
  parentCategory_id: string;
  parentCategoryName: string;
  config = config;
  noMoreChildren = false;

    constructor(
    private catalogService: CatalogService,
    private productService: ProductService,
  ) { }

  ngOnInit() {

    this.catalogForm = new FormGroup({
      parents : new FormArray([this.initParents()]),
    });

    this.catalogService.getChildren('products')
      .subscribe(
        (result: ICatalog[]) => this.children[0] = result,
        err => console.log('помилка завантаження категорій', err)
      );
  }

  onSelectCategory(event, level) {
    while (level + 1 < this.catalogForm.get('parents')['controls'].length) {
      this.removeParents(this.catalogForm.get('parents')['controls'].length - 1);
    }

    this.catalogService.getChildren(event.value).pipe(
      mergeMap((children: ICatalog[]) => {
        if (!children.length) {
          // if no children - show products
          this.parentCategory_id = event.value;
          this.parentCategoryName = event.source.triggerValue;
          this.noMoreChildren = true;
          this.children[level + 1] = children;
          return this.productService.getProductsByParent(event.value, 'products', false, -1, 0, 99999);
       } else {
          this.children[level + 1] = children;
          this.noMoreChildren = false;
          this.addParents();
          return this.productService.getProductsByParent(null, 'products', true, -1, 0, 99999);
        }
      })
    )
    .subscribe(result => {
      this.products = result[0].products;
    },
      err => console.log('помилка завантаження категорій', err)
    );
  }

  addParents() {
    const control = <FormArray>this.catalogForm.get('parents');
    control.push(this.initParents());
  }

  removeParents(i: number) {
    const control = <FormArray>this.catalogForm.get('parents');
    control.removeAt(i);
  }

  initParents() {
    return new FormControl('', [
      Validators.required,
    ]);
  }
}


