import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ValidateService } from '../../../services/validate.service';
import { IUser } from '../../../interfaces/user-interface';
import { UserService } from '../../../services/user.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { config } from '../../../app.config';
import {RecaptchaComponent} from 'ng-recaptcha';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})

export class UserCreateComponent implements OnInit {
  config = config;
  userCreateForm: FormGroup;
  hidePassword = true;
  user: IUser;

  /**
   * directive for reset form (invalid status)
   */
  @ViewChild(FormGroupDirective) userCreateFormDirective: FormGroupDirective;
  @ViewChild(RecaptchaComponent) recaptchaRef: RecaptchaComponent;

  constructor(
    private validateService: ValidateService,
    private userService: UserService,
    private matSnackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
    const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    this.userCreateForm = new FormGroup({
        login: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z0-9]+'),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z0-9]+'),
        ]),
        passwordConfirm: new FormControl('', [
          Validators.required,
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
          Validators.pattern(emailPattern),
        ]),
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
          Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
        ]),
        surname: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
          Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
        ]),
        recaptcha: new FormControl('', [
          Validators.required
        ])
      },
      this.validateService.matchPassword
    );
  }

  onUserCreateSubmit() {
    this.user = <IUser>{
      login: this.userCreateForm.get('login').value,
      password: this.userCreateForm.get('password').value,
      email: this.userCreateForm.get('email').value,
      name: this.userCreateForm.get('name').value,
      surname: this.userCreateForm.get('surname').value
    };
    // create user
    this.userService.userCreate(this.user,  this.userCreateForm.get('recaptcha').value)
      .subscribe(
        result => {
          const token = result;
          this.resetForm();
          this.matSnackBar.open('Користувача створено, вхід виконано', '', {duration: 3000});
          // login new user
          this.userService.logging();
          this.router.navigate(['/user', 'profile']);
        },
        err => {
          // 422 or 400
          this.recaptchaRef.reset();
          this.matSnackBar.open(err.error.message || 'Сталася полка', '',
            {duration: 3000, panelClass: 'snack-bar-danger'});
        }
      );
  }


  onUserCreateReset() {
    this.resetForm();
    // MAKE redirect
  }

  resetForm() {
    if (this.userCreateFormDirective) {
      this.userCreateFormDirective.resetForm();
    }
  }
}


