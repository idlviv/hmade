import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { McService } from 'src/app/services/mc.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { of, forkJoin as observableForkJoin } from 'rxjs';
import { FormGroupDirective, FormGroup, FormArray, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { config } from '../../../app.config';
import { CatalogService } from 'src/app/services/catalog.service';
import { SharedService } from 'src/app/services/shared.service';
import { MatSnackBar } from '@angular/material';
import { IMc } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-mc-editor-form',
  templateUrl: './mc-editor-form.component.html',
  styleUrls: ['./mc-editor-form.component.scss']
})
export class McEditorFormComponent implements OnInit {
  config = config;
  paramEdited_id: string;
  paramParent_id: string;
  editMode: boolean;
  processingLoadMainImage = false;
  processingLoadStepsPic = false;
  mc: IMc;

  @ViewChild('f') mcFormDirective: FormGroupDirective;
  mcForm: FormGroup;

  constructor(
    private mcService: McService,
    private catalogService: CatalogService,
    private route: ActivatedRoute,
    private location: Location,
    private sharedService: SharedService,
    private matSnackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.mcForm = new FormGroup({
      _id: new FormControl({value: '', disabled: false}, [
        Validators.required,
        Validators.pattern('[a-z0-9]+'),
        Validators.minLength(7),
        Validators.maxLength(7),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(500),
        Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ,."@%-_\' ]+'),
      ]),
      parents : new FormArray([]),
      display: new FormControl(true, []),
      onMainPage: new FormControl(false, []),
      mainImage: new FormControl(this.config.defaultProductImg, []),
      // pics : new FormArray([]),
      materials: new FormArray([]),
      steps: new FormArray([])
    });

    this.route.url.pipe(
      mergeMap(
        url => {
          switch (url[1].path) {
          case 'new':
            this.editMode = false;
            break;
          case 'edit':
            this.editMode = true;
            break;
          default: throw new Error('url error');
          }
          return this.route.paramMap;
        }
      ),
      mergeMap(
        params => {
          if (this.editMode) {
            this.paramEdited_id = params.get('_id');
            return this.mcService.getMcById(this.paramEdited_id);
          } else {
            this.paramParent_id = params.get('parent_id');
            return of(null);
          }
        }
      )
    )
    .subscribe(
      mc => {
        console.log('mc', mc);
        if (this.editMode) {
          // mc.pics.forEach(element => this.addControl('pics'));
          mc.materials.forEach(element => this.addMaterialsControl());
          mc.steps.forEach(element => this.addStepsControl());
          mc.parents.forEach(element => this.addControl('parents'));

          this.mcForm.patchValue(mc);
          this.mcForm.get('_id').disable();
        } else {
          this.addControl('parents');
          this.mcForm.get('parents').setValue([this.paramParent_id]);
          this.addMaterialsControl();
          this._createSku();
        }

      },
      err => console.log(err.message)
    );
  }

  _createSku(): void {
    this.mcService.getSkuList()
    .subscribe(
      result => {
        const prefix = config.mcPrefix;
        const skuList = result
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
          this.mcForm.patchValue({_id: sku});
      },
          err => console.log(err.error)
      );
  }

  addMainImage(event): void {
    this.processingLoadMainImage = true;
    const file = event.target.files[0];
    const checkFile = this.sharedService.checkFile(file);

    if (!checkFile.success) {
      this.matSnackBar.open(checkFile.message || 'Помилка', '',
        {duration: 3000, panelClass: 'snack-bar-danger'});
      this.processingLoadMainImage = false;
    } else {
      this.mcService.addMainImage(file, this.mcForm.get('_id').value)
        .subscribe(result => {
            this.mcForm.get('mainImage').setValue(result);
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

  addStepsPic(event, i): void {
    this.processingLoadStepsPic = true;
    const file = event.target.files[0];
    const checkFile = this.sharedService.checkFile(file);

    if (!checkFile.success) {
      this.matSnackBar.open(checkFile.message || 'Помилка', '',
        {duration: 3000, panelClass: 'snack-bar-danger'});
      this.processingLoadStepsPic = false;
    } else {
      this.mcService.addStepsPic(file, this.mcForm.get('_id').value)
        .subscribe(result => {
            console.log('this.mcForm.get(steps).controls', this.mcForm.get('steps')['controls']);
            this.mcForm.get('steps')['controls'][i].get('pic').setValue(result);
            this.processingLoadStepsPic = false;
          },
          err => {
            this.matSnackBar.open(err.error || 'Помилка', '',
              {duration: 3000, panelClass: 'snack-bar-danger'});
            this.processingLoadStepsPic = false;
          }
        );
    }
  }

  onMcFormSubmit(goBackAndReset: boolean): void {

    this.mc = <IMc>{
      parents: this.mcForm.get('parents').value,
      _id: this.mcForm.getRawValue()._id, // raw because may be disabled
      name: this.mcForm.get('name').value,
      steps : this.mcForm.get('steps').value,
      description : this.mcForm.get('description').value,
      onMainPage: this.mcForm.get('onMainPage').value,
      display: this.mcForm.get('display').value,
      mainImage: this.mcForm.get('mainImage').value,
      materials: this.mcForm.get('materials').value
    };

    this.mcService.mcUpsert(this.mc)
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

  }

  resetForm() {
    this.mcFormDirective.resetForm();
  }

  goBack() {
    this.location.back();
  }

  addStepsControl() {
    const control = <FormArray>this.mcForm.get('steps');
    control.push(new FormGroup({
      pic: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(600),
        Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ,."@%-_\' ]+'),
      ]),
    }),
    );
  }

  addMaterialsControl() {
    const control = <FormArray>this.mcForm.get('materials');
    return control.push(new FormGroup({
        name: new FormControl('', [
          Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ,."@%-_\' ]+'),
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.required,
        ]),
        value: new FormControl('', [
          Validators.pattern('[0-9]+'),
          Validators.minLength(1),
          Validators.maxLength(4),
          Validators.required,
        ]),
        units: new FormControl('', [
          Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ,."@%-_\' ]+'),
          Validators.minLength(1),
          Validators.maxLength(7),
          Validators.required,
        ]),
      })
    );
  }

  /**
   *
   *
   * @param {string} formField
   * @param {*} [formState=null] // initialization
   * @param {ValidatorFn[]} [validators=[]] //validators
   * @memberof McEditorFormComponent
   */
  addControl(formField: string, formState: any = null, validators: ValidatorFn[] = []) {
    const control = <FormArray>this.mcForm.get(formField);
    control.push(this.initControl(validators, formState));
  }

  /**
   *
   *
   * @param {string} formField
   * @param {number} position // position which removes
   * @memberof McEditorFormComponent
   */
  removeControl(formField: string, position: number) {
    const control = <FormArray>this.mcForm.get(formField);
    control.removeAt(position);
  }

  initControl(validators: ValidatorFn[], formState: any = null) {
    return new FormControl(formState, validators);
  }
}
