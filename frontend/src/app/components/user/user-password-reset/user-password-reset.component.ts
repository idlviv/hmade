import { Component,  OnInit, ViewChild, Injector } from '@angular/core';
// import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
// import { UserService } from '../../../services/user.service';
// import { ValidateService } from '../../../services/validate.service';
// import { MatSnackBar, MatStepper } from '@angular/material';
// import { Router } from '@angular/router';
// import { config } from '../../../app.config';
import { PasswordResetComponent } from 'ng-user-man';


@Component({
  selector: 'app-user-password-reset',
  templateUrl: './user-password-reset.component.html',
  styleUrls: ['./user-password-reset.component.scss']
})

export class UserPasswordResetComponent extends PasswordResetComponent implements OnInit {
  // config = config;
  // emailForm: FormGroup;
  // codeForm: FormGroup;
  // passwordForm: FormGroup;
  // hidePassword = true;
  // processing = false;
  // // result = false;
  // error: {};
  // @ViewChild('stepper', { static: false }) matStepper: MatStepper;
  // @ViewChild('recaptchaRef', { static: false }) recaptchaRef;

  constructor(
    protected injector: Injector,
    // private userService: UserService,
    // private validateService: ValidateService,
    // private matSnackBar: MatSnackBar,
    // private router: Router,
    // private sharedService: SharedService,
  ) { 
    super(injector);
  }

  ngOnInit() {
    super.ngOnInit();
    // const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    // this.emailForm = new FormGroup({
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(5),
    //     Validators.maxLength(30),
    //     Validators.pattern(emailPattern),
    //   ]),
    //   recaptcha: new FormControl('', [
    //     Validators.required
    //   ])
    //   },
    // );

    // this.codeForm = new FormGroup({
    //     code: new FormControl('', [
    //       Validators.required,
    //     ]),
    //   },
    // );

    // this.passwordForm = new FormGroup({
    //     password: new FormControl('', [
    //       Validators.required,
    //       Validators.minLength(6),
    //       Validators.maxLength(15),
    //       Validators.pattern('[a-zA-Z0-9]+'),
    //     ]),
    //     passwordConfirm: new FormControl('', [
    //       Validators.required,
    //     ]),
    //   },
    //   this.validateService.matchPassword
    // );
  }

  // onEmailSubmit(stepper) {
  //   this.processing = true;
  //   this.userService.userLocalRemoveToken('token');
  //   this.userService.userLocalRemoveToken('codeToken');
  //   this.userService.userLocalRemoveToken('passwordResetToken');

  //   const email = this.emailForm.get('email').value;
  //   const recaptcha = this.emailForm.get('recaptcha').value;
  //   this.userService.userPasswordResetEmail(email, recaptcha)
  //     .subscribe(
  //       result => {
  //         this.processing = false;
  //         this.emailForm.get('email').setErrors(null);
  //         this.matStepper.next();
  //         const codeToken = result;
  //         this.userService.userLocalSetToken('codeToken', codeToken);
  //       },
  //       err => {
  //         this.processing = false;
  //         if (err.error.code === 'wrongCredentials') {
  //           this.emailForm.get('email').setErrors({invalidEmail: true});
  //         } else {
  //           this.matStepper.reset();
  //           this.matSnackBar.open('Сталася помилка', '',
  //           {duration: 3000, panelClass: 'snack-bar-danger'});
  //         }
  //       }
  //     );
  // }

  // onCodeSubmit() {
  //   this.processing = true;
  //   const code = this.codeForm.get('code').value;

  //   const codeToken = this.userService.userLocalGetToken('codeToken');
  //   this.userService.userPasswordResetCode(code, codeToken)
  //     .subscribe(
  //       passwordResetToken => {
  //         this.processing = false;
  //         this.codeForm.get('code').setErrors(null);
  //         this.matStepper.next();
  //         this.userService.userLocalRemoveToken('codeToken');
  //         this.userService.userLocalSetToken('passwordResetToken', passwordResetToken);
  //       },
  //       err => {
  //         this.processing = false;
  //         if (err.error.code === 'wrongCredentials') {
  //           this.codeForm.get('code').setErrors({invalidCode: true});
  //         } else if (err.error.code === 'maxTries') {
  //           this.codeForm.get('code').setErrors({maxTries: true});
  //           this.codeForm.setValidators(this.validateService.maxTries);
  //           setTimeout(() => {
  //             this.router.navigate(['/']);
  //           }, 3000);
  //             this.matSnackBar.open('Код невірний, спрпобуйте пізніше', '',
  //             {duration: 4000, panelClass: 'snack-bar-danger'});

  //         } else {
  //           this.codeForm.get('code').setErrors({unrecognizedError: true});
  //         }
  //       }
  //     );
  // }

  // refresh() {
  //   // TODO: make refresh logic
  //   console.log('refresh');
  // }

  // onPasswordSubmit() {
  //   this.processing = true;
  //   const password = this.passwordForm.get('password').value;

  //   const passwordResetToken = this.userService.userLocalGetToken('passwordResetToken');

  //   this.userService.userPasswordReset(password, passwordResetToken)
  //     .subscribe(result => {
  //         // const token = result;
  //         this.processing = false;
  //         this.userService.userLocalRemoveToken('passwordResetToken');
  //         this.userService.logging();
  //         this.sharedService.sharingEventToReloadComments();
  //         this.router.navigate(['/user', 'profile']);
  //         this.matSnackBar.open('Пароль відновлено', '',
  //           {duration: 3000, panelClass: 'snack-bar-danger'});
  //       },
  //       err => {
  //         this.processing = false;
  //         this.matSnackBar.open(err.error.message || 'Сталася помилка', '',
  //           {duration: 3000, panelClass: 'snack-bar-danger'});
  //       }
  //     );
  // }

  // goHomePage() {
  //   this.router.navigate(['/']);
  // }

}
