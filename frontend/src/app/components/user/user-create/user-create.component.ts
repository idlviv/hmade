import { Component, OnInit, ViewChild, ElementRef, Injector } from '@angular/core';
// import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
// import { ValidateService } from '../../../services/validate.service';
// import { IUser } from '../../../interfaces/user-interface';
// import { UserService } from '../../../services/user.service';
// import { MatSnackBar } from '@angular/material';
// import { Router } from '@angular/router';
// import { SharedService, ValidateService, NgUserManService } from 'ng-user-man';;
// import { config } from '../../../app.config';
// import { RecaptchaComponent } from 'ng-recaptcha';
import { CreateComponent } from 'ng-user-man';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})

export class UserCreateComponent extends CreateComponent implements OnInit {
  // config = config;
  // userCreateForm: FormGroup;
  // hidePassword = true;
  // user: IUser;

  // /**
  //  * directive for reset form (invalid status)
  //  */
  // @ViewChild(FormGroupDirective, { static: false }) userCreateFormDirective: FormGroupDirective;
  // @ViewChild(RecaptchaComponent, { static: false }) recaptchaRef: RecaptchaComponent;

  constructor(
    // protected validateService: ValidateService,
    // protected ngUserManService: NgUserManService,
    // protected matSnackBar: MatSnackBar,
    // protected router: Router,
    protected injector: Injector,
  ) {
    super(
      // validateService,
      // ngUserManService,
      // matSnackBar,
      // router,
      injector
    );
  }

  ngOnInit() {
    super.ngOnInit();
    
    // const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    // this.userCreateForm = new FormGroup({
    //   login: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(4),
    //     Validators.maxLength(15),
    //     Validators.pattern('[a-zA-Z0-9]+'),
    //   ]),
    //   password: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(6),
    //     Validators.maxLength(15),
    //     Validators.pattern('[a-zA-Z0-9]+'),
    //   ]),
    //   passwordConfirm: new FormControl('', [
    //     Validators.required,
    //   ]),
    //   name: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(2),
    //     Validators.maxLength(20),
    //     Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
    //   ]),
    //   surname: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(2),
    //     Validators.maxLength(20),
    //     Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
    //   ]),
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(5),
    //     Validators.maxLength(50),
    //     Validators.pattern(emailPattern),
    //   ]),
    //   recaptcha: new FormControl('', [
    //     Validators.required
    //   ])
    // },
    //   this.validateService.matchPassword
    // );
  }

  // onUserCreateSubmit() {
  //   this.user = <IUser>{
  //     login: this.userCreateForm.get('login').value,
  //     password: this.userCreateForm.get('password').value,
  //     email: this.userCreateForm.get('email').value,
  //     name: this.userCreateForm.get('name').value,
  //     surname: this.userCreateForm.get('surname').value
  //   };
  //   // create user
  //   this.userService.userCreate(this.user, this.userCreateForm.get('recaptcha').value)
  //     .subscribe(
  //       result => {
  //         const token = result;
  //         this.resetForm();
  //         this.matSnackBar.open('Користувача створено, вхід виконано', '', { duration: 3000 });
  //         // login new user
  //         this.userService.logging();
  //         this.router.navigate(['/user', 'profile']);
  //       },
  //       err => {
  //         // 422 or 400
  //         this.recaptchaRef.reset();
  //         this.matSnackBar.open(err.error.message || 'Сталася помилка', '',
  //           { duration: 3000, panelClass: 'snack-bar-danger' });
  //       }
  //     );
  // }


  // onUserCreateReset() {
  //   this.resetForm();
  //   // MAKE redirect
  // }

  // resetForm() {
  //   if (this.userCreateFormDirective) {
  //     this.userCreateFormDirective.resetForm();
  //   }
  // }
}


