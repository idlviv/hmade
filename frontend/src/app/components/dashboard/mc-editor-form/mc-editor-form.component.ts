import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { McService } from 'src/app/services/mc.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormGroupDirective, FormGroup, FormArray, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { config } from '../../../app.config';

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
  parents: string[];

  @ViewChild('f') mcFormDirective: FormGroupDirective;
  mcForm: FormGroup;

  constructor(
    private mcService: McService,
    private route: ActivatedRoute,
    private location: Location,
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
        Validators.maxLength(30),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(200),
        Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ,."@%-_\' ]+'),
      ]),
      parents : new FormArray([]),
      display: new FormControl(true, []),
      onMainPage: new FormControl(false, []),
      mainImage: new FormControl(this.config.defaultProductImg, []),
      pics : new FormArray([]),
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
        if (this.editMode) {
          // save parents
          this.parents = mc.parents;
          mc.pics.forEach(element => {
            this.addControl('pics');
          });
          mc.materials.forEach(element => {
            this.addMaterialsControl();
          });
          this.mcForm.patchValue(mc);
          console.log('mcForm', this.mcForm);
        } else {
          // create parents []
          this.parents = [this.paramParent_id];
        }

      },
      err => console.log(err.message)
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
        Validators.maxLength(200),
        Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ,."@%-_\' ]+'),
      ]),
    }),
    );
  }

  addMaterialsControl() {
    const control = <FormArray>this.mcForm.get('materials');
    control.push(new FormGroup({
        name: new FormControl('', [
          Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ,."@%-_\' ]+'),
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.required,
        ]),
        quantity: new FormControl('', [
          Validators.pattern('[0-9]+'),
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
  removeControl(formControl: string, position: number) {
    const control = <FormArray>this.mcForm.get(formControl);
    control.removeAt(position);
  }

  initControl(validators: ValidatorFn[], formState: any = null) {
    return new FormControl(formState, validators);
  }
}
