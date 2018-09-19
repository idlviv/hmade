import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { config } from '../../../app.config';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-editor-form',
  templateUrl: './product-editor-form.component.html',
  styleUrls: ['./product-editor-form.component.scss']
})
export class ProductEditorFormComponent implements OnInit {
  @ViewChild('f') productFormDirective: FormGroupDirective;

  config = config;
  productForm: FormGroup;

  editMode = false;
  edited_id: string;
  parentCategory_id: string;
  parentCategories: string[];
  parentCategoryName: string;

  constructor(
    private matSnackBar: MatSnackBar,
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      parents : new FormArray([this.initParentsControl()]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(150),
        Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ,."@%-_\' ]+'),
      ]),
      dimensions: new FormGroup({
        width: new FormControl('', [
          Validators.pattern('[0-9]+'),
          Validators.maxLength(3),
        ]),
        height: new FormControl('', [
          Validators.pattern('[0-9]+'),
          Validators.maxLength(3),
        ]),
      }),
      _id: new FormControl({value: '', disabled: false}, [
        Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ]+'),
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
      price: new FormControl('', [
        Validators.pattern('^\\d*\\.?\\d+$'),
      ]),
      discount: new FormControl('', [
        Validators.pattern('^\\d*\\.?\\d+$'),
      ]),
      assets: new FormArray([]),
      onMainPage: new FormControl('', [
        // Validators.required,
      ]),
    });

    this.route.paramMap.pipe(
      mergeMap(params => {
        this.edited_id = params.get('_id');
        this.parentCategory_id = params.get('parentCategory_id');
        this.parentCategoryName = params.get('parentCategoryName');
        if (!this.edited_id) {
          return of(null);
        }
        return this.productService.getProductById(this.edited_id, false);
      })
    )
    .subscribe(result => {
        if (result) {
          this.editMode = true;
          this.parentCategories = result.parent;
          for (let i = 0; i < result.data.assets.length; i++) {
            this.addAssetsControl();
          }
          this.productForm.patchValue(result.data);
          this.productForm.get('_id').disable();
        } else {
          this.parentCategories = [this.parentCategory_id];
        }
      },
      err => console.log('Помилка', err)
    );

  }

  resetForm() {
    this.productFormDirective.resetForm();
  }

  goBack() {
    this.location.back();
  }

  addParentsControl() {
    const control = <FormArray>this.productForm.get('parents');
    control.push(this.initParentsControl());
  }

  removeParentsControl(i: number) {
    const control = <FormArray>this.productForm.get('parents');
    control.removeAt(i);
  }

  initParentsControl() {
    return new FormControl('', [
        Validators.required,
      ])
    ;
  }

  addAssetsControl() {
    const control = <FormArray>this.productForm.get('assets');
    control.push(this.initAssetsControl());
  }

  removeAssetsControl(i: number) {
    const control = <FormArray>this.productForm.get('assets');
    control.removeAt(i);
  }

  initAssetsControl() {
    return new FormControl('file', [
        // Validators.required,
      ]);
  }

}
