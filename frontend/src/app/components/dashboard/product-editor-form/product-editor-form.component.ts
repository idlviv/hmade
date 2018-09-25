import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroupDirective, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { config } from '../../../app.config';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { CatalogService } from '../../../services/catalog.service';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { forkJoin as observableForkJoin,  Observable } from 'rxjs';
import { IProduct } from '../../../interfaces/product-interface';

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
  processingLoadAssets = -1;
  processingLoadMainImage = false;

  paramEdited_id: string;
  paramParent_id: string;
  paramParentName: string;
  parents: string[];

  product: IProduct;

  constructor(
    private matSnackBar: MatSnackBar,
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    private catalogService: CatalogService,
  ) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      parents : new FormArray([]),
      assets: new FormArray([]),

      _id: new FormControl({value: '', disabled: false}, [
        Validators.required,
        Validators.pattern('[a-z0-9]+'),
        Validators.minLength(7),
        Validators.maxLength(7),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
      ]),
      display: new FormControl(true, [
      ]),
      onMainPage: new FormControl(false, [
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(200),
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
      price: new FormControl('', [
        Validators.pattern('^\\d*\\.?\\d+$'),
      ]),
      discount: new FormControl(0, [
        Validators.pattern('[0-9]{1,2}'),
      ]),
      mainImage: new FormControl(this.config.defaultProductImg, []),
      menuImage: new FormControl(this.config.defaultProductImg, []),
    });

    this.route.paramMap.pipe(
      mergeMap(params => {
        this.paramEdited_id = params.get('_id');
        this.paramParent_id = params.get('parentCategory_id');
        this.paramParentName = params.get('parentCategoryName');
        if (!this.paramEdited_id) {
          return of(null);
        }
        return this.productService.getProductById(this.paramEdited_id, false);
      })
    )
    .subscribe(result => {
        if (result) {
          // edit product
          console.log('result edit', result);
          this.editMode = true;
          // this.parents = result.data.parents;

          for (let i = 0; i < result.data.assets.length; i++) {
            this.addAssetsControl();
          }
          console.log(' result.data.parents.length',  result.data.parents.length);
          for (let i = 0; i < result.data.parents.length; i++) {
            this.addParentsControl();
          }
          this.productForm.patchValue(result.data);
          this.productForm.get('_id').disable();
        } else {
          // new product
          console.log('result new', result);
          // this.parents = [this.paramParent_id];
          this.addParentsControl();
          this.productForm.get('parents').setValue([this.paramParent_id]);
          this._createSku(this.paramParent_id);
        }
      },
      err => console.log('Помилка', err)
    );
  }

  _createSku(parent: string) {
    const getPrefix$ = this.catalogService.getPrefix(parent);
    const getSkuList$ = this.productService.getSkuList();

    observableForkJoin(getPrefix$, getSkuList$).subscribe(result => {
      const prefix = result[0].data.prefix;

      const skuList = result[1]
        .map(item => item._id) // create [] from {}
        .filter(item => item.slice(0, 3) === prefix) // take elems with needed prefix
        .map(item => +item.slice(3)); // concat prefix, take only numbers

        let freeNumber = 1;
        for (let i = 0; i < skuList.length; i++) {
          if (skuList[i] - (i + 1) >= 1) {
            freeNumber = i + 1;
            break;
          }
          if (i === skuList.length - 1) {
            freeNumber = skuList.length + 1;
          }
        }
        let sku = freeNumber.toString();
        while (sku.length < 4) {
          sku = '0' + sku;
        }
        sku = prefix + sku;
        this.productForm.patchValue({_id: sku});
    },
          err => this.matSnackBar.open(err.error, '',
            {duration: 3000, panelClass: 'snack-bar-danger'})
      );
  }

  addMainImage(event) {
    this.processingLoadMainImage = true;
    const file = event.target.files[0];
    const checkFile = this.productService.checkFile(file);

    if (!checkFile.success) {
      this.matSnackBar.open(checkFile.message || 'Помилка', '',
        {duration: 3000, panelClass: 'snack-bar-danger'});
      this.processingLoadMainImage = false;
    } else {
      this.productService.productAddMainImage(file, this.productForm.get('_id').value)
        .subscribe(result => {
            this.productForm.get('mainImage').setValue(result.data);
            this.processingLoadMainImage = false;
          },
          err => {
            this.matSnackBar.open(err.error || 'Помилка', '',
              {duration: 3000, panelClass: 'snack-bar-danger'});
            this.processingLoadMainImage = false;
          }
        );
    }
  }

  onProductFormSubmit(goBackAndReset: boolean): void {

    this.product = <IProduct>{
      parents: this.productForm.get('parents').value,
      _id: this.productForm.getRawValue()._id, // raw because may be disabled
      name: this.productForm.get('name').value,
      price: this.productForm.get('price').value,
      discount: this.productForm.get('discount').value,
      // assets : this.productForm.get('assets').value,
      description : this.productForm.get('description').value,
      onMainPage: this.productForm.get('onMainPage').value,
      display: this.productForm.get('display').value,
      mainImage: this.productForm.get('mainImage').value,
      menuImage: this.productForm.get('menuImage').value,
      dimensions: {
        width: this.productForm.get('dimensions.width').value,
        height: this.productForm.get('dimensions.height').value,
      }
    };

    this.productService.productUpsert(this.product)
    .subscribe(result => {
        this.matSnackBar.open(result.message, '',
          {duration: 3000});
        if (goBackAndReset) {
          this.goBack();
          this.resetForm();
          this.editMode = false;
        } else {
          this.editMode = true;
        }
      },
      err => this.matSnackBar.open(err.error, '',
        {duration: 3000, panelClass: 'snack-bar-danger'})
    );

    // if (this.editMode) {
    //   // edit
    //   // this.product._id = this.paramEdited_id;
    //   this.productService.productEdit(this.product)
    //     .subscribe(result => {
    //         this.matSnackBar.open(result.message, '',
    //           {duration: 3000});
    //         this.resetForm();
    //         this.editMode = false;
    //       },
    //       err => this.matSnackBar.open(err.error, '',
    //         {duration: 3000, panelClass: 'snack-bar-danger'})
    //     );

    // } else {
    //   this.productService.productCreate(this.product)
    //     .subscribe(result => {
    //         this.matSnackBar.open(result.message, '',
    //           {duration: 3000});
    //         this.resetForm();
    //       },
    //       err => this.matSnackBar.open(err.error, '',
    //         {duration: 3000, panelClass: 'snack-bar-danger'})
    //     );
    // }

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
