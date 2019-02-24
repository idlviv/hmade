import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/index';
import { mergeMap } from 'rxjs/operators';
import { CatalogService } from '../../../services/catalog.service';
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
        result => this.children[0] = result.data,
        err => console.log('помилка завантаження категорій', err)
      );
  }

  onSelectCategory(event, level) {
    while (level + 1 < this.catalogForm.get('parents')['controls'].length) {
      this.removeParents(this.catalogForm.get('parents')['controls'].length - 1);
    }

    this.catalogService.getChildren(event.value).pipe(
      mergeMap(children => {
        if (!children.data.length) {
          // if no children - show products
          this.parentCategory_id = event.value;
          this.parentCategoryName = event.source.triggerValue;
          this.noMoreChildren = true;
          this.children[level + 1] = children.data;
          return this.productService.getProductsByParent(event.value, 'products', false);
       } else {
          this.children[level + 1] = children.data;
          this.noMoreChildren = false;
          this.addParents();
          return this.productService.getProductsByParent(null, 'products', true);
        }
      })
    )
    .subscribe(res => {
      this.products = res;
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


