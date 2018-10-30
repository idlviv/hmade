import { Component, OnInit } from '@angular/core';
import { McService } from 'src/app/services/mc.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormGroupDirective, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
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

  mcForm: FormGroup;

  constructor(
    private mcService: McService,
    private route: ActivatedRoute,
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
      display: new FormControl(true, [
      ]),
      onMainPage: new FormControl(false, [
      ]),
      mainImage: new FormControl(this.config.defaultProductImg, []),
      menuImage: new FormControl(this.config.defaultProductImg, []),
      pics : new FormArray([]),
      materials: new FormGroup({
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
      }),
      steps: new FormGroup({
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
        result => console.log('result', result),
        err => console.log(err.message)
      );
  }

}
