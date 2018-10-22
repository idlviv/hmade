
import {forkJoin as observableForkJoin,  Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { CatalogService } from '../../../services/catalog.service';
import { ICatalog } from '../../../interfaces/catalog-interface';
import { MatSnackBar } from '@angular/material';
import { IProduct } from '../../../interfaces/product-interface';
import { ProductService } from '../../../services/product.service';

import { ValidateService } from '../../../services/validate.service';
import { config } from '../../../app.config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  config = config;
  productCreateForm: FormGroup;
  product: IProduct;
  categories: any;
  processingLoadFile = -1;
  editMode = false;
  edited_id: string;
  /**
   * directive for reset form (invalid status)
   */
  @ViewChild('f') productCreateFormDirective: FormGroupDirective;

  constructor(
    private catalogService: CatalogService,
    private productService: ProductService,
    private matSnackBar: MatSnackBar,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {

    this.productCreateForm = new FormGroup({
      parents : new FormArray([this.initParents()]),
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

    this.catalogService.getDescendants('products', 0)
      .subscribe( descendants => {
        console.log('descendants.data', descendants.data);
        this.categories = descendants.data;
      },
        err => this.matSnackBar.open(err.error, '',
          {duration: 3000, panelClass: 'snack-bar-danger'})
      );

    this.route.paramMap
      .subscribe(paramMap => {
        if (paramMap.get('_id')) {
          console.log('product editor(create) _id', paramMap.get('_id'));
          this.edited_id = paramMap.get('_id');
          this.editMode = true;

          this.productService.getProductById(this.edited_id, 'products', null)
            .subscribe(product => {

              for (let i = 1; i < product.data.categories.length; i++) {
                this.addParents();
              }

              for (let i = 0; i < product.data.files.length; i++) {
                this.addAssets();
              }

              this.productCreateForm.patchValue(product.data);

          },
            err => console.log('Помилка завантаження товару для редагування', err)
        );
      }
    });
  }

  resetForm() {
    if (this.productCreateFormDirective) {

      // enabling disabled fields
      this.productCreateForm.get('_id').enable();
      this.productCreateForm.get('parents')['controls'][0].enable();

      // deleting needless controls
      // categories controls array has one item on init
      for (let i = this.productCreateForm.get('parents')['controls'].length; i > 1 ; i--) {
        this.removeParents(i - 1);
      }
      // files controls array don't has elems on init
      for (let i = this.productCreateForm.get('assets')['controls'].length; i > 0 ; i--) {
        this.removeAssets(i - 1);
      }
      this.productCreateFormDirective.resetForm();
    }
  }

  addPictures(event) {
      this.processingLoadFile = this.productCreateForm.get('assets').value.length;
      const file = event.target.files[0];
      const checkFile = this.productService.checkFile(file);


      if (!checkFile.success) {
        this.matSnackBar.open(checkFile.message || 'Помилка', '',
          {duration: 3000, panelClass: 'snack-bar-danger'});
        this.processingLoadFile = -1;
      } else {
        const filesLinks = this.productCreateForm.get('assets').value;
        filesLinks.push(config.imgPath + config.cloudinary + config.defaultProductImg);
        this.addAssets();
        this.productCreateForm.get('assets').setValue(filesLinks);
        this.productService.productAddImage(file, this.productCreateForm.get('_id').value)
          .subscribe(result => {
              // this.previewProductImages.pop();
              filesLinks.pop();
              filesLinks.push(result.data);
              this.productCreateForm.get('assets').setValue(filesLinks);
              console.log('this.productCreateForm.get(\'files\').value', this.productCreateForm.get('assets').value);
              // this.previewProductImages = filesLinks;
              // console.log('this.previewProductImages', this.previewProductImages);
              console.log(result);
              this.processingLoadFile = -1;
            },
            err => {
              this.matSnackBar.open(err.error || 'Помилка', '',
                {duration: 3000, panelClass: 'snack-bar-danger'});
              this.removeAssets(this.productCreateForm.get('assets').value.length - 1);
              // this.previewProductImages.pop();
              filesLinks.pop();
              this.processingLoadFile = -1;

            }
          );
      }
  }

  onProductCreateSubmit() {
    // remove duplicates
    const uniqueParents = [];
    this.productCreateForm.getRawValue().parents
      .forEach((item) => {
        if (uniqueParents.indexOf(item) === -1) {
          uniqueParents.push(item);
        }
    });

    this.product = <IProduct>{
      parents: uniqueParents,
      _id: this.productCreateForm.getRawValue()._id, // raw because may be disabled
      name: this.productCreateForm.get('name').value,
      price: this.productCreateForm.get('price').value,
      discount: this.productCreateForm.get('discount').value,
      assets : this.productCreateForm.get('assets').value,
      description : this.productCreateForm.get('description').value,
      onMainPage: this.productCreateForm.get('onMainPage').value || false,
      dimensions: {
        width: this.productCreateForm.get('dimensions.width').value,
        height: this.productCreateForm.get('dimensions.height').value,
      }
    };

    if (this.editMode) {
      // edit
      this.product._id = this.edited_id;
      this.productService.productEdit(this.product)
        .subscribe(result => {
            this.matSnackBar.open(result.message, '',
              {duration: 3000});
            this.resetForm();
            this.editMode = false;
          },
          err => this.matSnackBar.open(err.error, '',
            {duration: 3000, panelClass: 'snack-bar-danger'})
        );

    } else {
      this.productService.productCreate(this.product)
        .subscribe(result => {
            this.matSnackBar.open(result.message, '',
              {duration: 3000});
            this.resetForm();
          },
          err => this.matSnackBar.open(err.error, '',
            {duration: 3000, panelClass: 'snack-bar-danger'})
        );
    }

  }

  onSelectParents(event) {
    if (event.source.ngControl.name === '0') {
      this.createSku(event.value);
    }
  }

  createSku(category) {

    // const getPrefix$ = this.catalogService.getPrefix(category);
    // const getSkuList$ = this.productService.getSkuList(category);

    // observableForkJoin(getPrefix$, getSkuList$).subscribe(result => {
    //   const prefix = result[0].data.prefix;
    //   const skuList = result[1].data
    //     .map(item => item.sku) // create [] from {}
    //     .filter(item => item.slice(0, 2) === prefix) // take elems with needed prefix
    //     .map(item => +item.slice(2)); // concat prefix, take only numbers

    //     console.log('skuList', skuList);
    //     let freeNumber = 1;
    //     for (let i = 0; i < skuList.length; i++) {
    //       if (skuList[i] - (i + 1) >= 1) {
    //         freeNumber = i + 1;
    //         break;
    //       }
    //       if (i === skuList.length - 1) {
    //         freeNumber = skuList.length + 1;
    //       }
    //     }
    //     let sku = freeNumber.toString();
    //     while (sku.length < 4) {
    //       sku = '0' + sku;
    //     }
    //     sku = prefix + sku;
    //     this.productCreateForm.patchValue({sku});
    // },
    //       err => this.matSnackBar.open(err.error, '',
    //         {duration: 3000, panelClass: 'snack-bar-danger'})
    //   );
  }

  addParents() {
    const control = <FormArray>this.productCreateForm.get('parents');
    control.push(this.initParents());
  }

  removeParents(i: number) {
    const control = <FormArray>this.productCreateForm.get('parents');
    control.removeAt(i);
  }

  initParents() {
    return new FormControl('', [
        Validators.required,
      ])
    ;
  }

  addCategory() {

  }

  addAssets() {
    const control = <FormArray>this.productCreateForm.get('assets');
    control.push(this.initAssets());
  }

  removeAssets(i: number) {
    const control = <FormArray>this.productCreateForm.get('assets');
    control.removeAt(i);
  }

  initAssets() {
    return new FormControl('file', [
        // Validators.required,
      ]);
  }
}
