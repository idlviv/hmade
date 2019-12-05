import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/index';
import { mergeMap } from 'rxjs/operators';
import { CatalogService, ICatalog } from 'ng-user-man';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { config } from '../../../app.config';
import { McService } from 'src/app/services/mc.service';

@Component({
  selector: 'app-mc-editor',
  templateUrl: './mc-editor.component.html',
  styleUrls: ['./mc-editor.component.scss']
})
export class McEditorComponent implements OnInit {
  children = [];
  catalogForm: FormGroup;
  mcs: any;
  parentCategory_id: string;
  parentCategoryName: string;
  config = config;
  noMoreChildren = false;

    constructor(
    private catalogService: CatalogService,
    private mcService: McService,
  ) { }

  ngOnInit() {

    this.catalogForm = new FormGroup({
      parents : new FormArray([this.initParents()]),
    });

    this.catalogService.getChildren('products')
      .subscribe(
        (result: ICatalog[]) => this.children[0] = result,
        err => console.log(err.error.message)
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
          this.noMoreChildren = true;
          this.children[level + 1] = children;
          return this.mcService.getMcsByParent(event.value, false);
       } else {
          this.children[level + 1] = children;
          this.noMoreChildren = false;
          this.addParents();
          return of(null);
        }
      })
    )
    .subscribe(result => {
      this.mcs = result;
    },
      err => console.log('помилка завантаження категорій', err)
    );
  }

  addParents() {
    const control = this.catalogForm.get('parents') as FormArray;
    control.push(this.initParents());
  }

  removeParents(i: number) {
    const control = this.catalogForm.get('parents') as FormArray;
    control.removeAt(i);
  }

  initParents() {
    return new FormControl('', [
      Validators.required,
    ]);
  }
}


