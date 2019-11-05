import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { NgUserManService } from '../ng-user-man.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper, MatSnackBar } from '@angular/material';
import { ValidateService } from '../validate.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'lib-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  public config: any;
  protected ngUserManService: NgUserManService;
  protected router: Router;
  protected matSnackBar: MatSnackBar;
  protected validateService: ValidateService;
  protected sharedService: SharedService;

  emailForm: FormGroup;
  codeForm: FormGroup;
  passwordForm: FormGroup;
  hidePassword = true;
  processing = false;
  error: {};

  @ViewChild('stepper', { static: false }) matStepper: MatStepper;
  @ViewChild('recaptchaRef', { static: false }) recaptchaRef;

  constructor(protected injector: Injector) {
    this.config = injector.get('config');
    this.validateService = injector.get(ValidateService);
    this.ngUserManService = injector.get(NgUserManService);
    this.sharedService = injector.get(SharedService);
    this.matSnackBar = injector.get(MatSnackBar);
    this.router = injector.get(Router);
  }

  ngOnInit() {
    const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    this.emailForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        Validators.pattern(emailPattern),
      ]),
      recaptcha: new FormControl('', [
        Validators.required
      ])
    },
    );

    this.codeForm = new FormGroup({
      code: new FormControl('', [
        Validators.required,
      ]),
    },
    );

    this.passwordForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern('[a-zA-Z0-9]+'),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
      ]),
    },
      this.validateService.matchPassword
    );
  }

  onEmailSubmit(stepper) {
    this.processing = true;
    this.ngUserManService.userLocalRemoveToken('token');
    this.ngUserManService.userLocalRemoveToken('codeToken');
    this.ngUserManService.userLocalRemoveToken('passwordResetToken');

    const email = this.emailForm.get('email').value;
    const recaptcha = this.emailForm.get('recaptcha').value;
    this.ngUserManService.userPasswordResetEmail(email, recaptcha)
      .subscribe(
        result => {
          this.processing = false;
          this.emailForm.get('email').setErrors(null);
          this.matStepper.next();
          const codeToken = result;
          this.ngUserManService.userLocalSetToken('codeToken', codeToken);
        },
        err => {
          this.processing = false;
          if (err.error.code === 'wrongCredentials') {
            this.emailForm.get('email').setErrors({ invalidEmail: true });
          } else {
            this.matStepper.reset();
            this.matSnackBar.open('Сталася помилка', '',
              { duration: 3000, panelClass: 'snack-bar-danger' });
          }
        }
      );
  }

  onCodeSubmit() {
    this.processing = true;
    const code = this.codeForm.get('code').value;

    const codeToken = this.ngUserManService.userLocalGetToken('codeToken');
    this.ngUserManService.userPasswordResetCode(code, codeToken)
      .subscribe(
        passwordResetToken => {
          this.processing = false;
          this.codeForm.get('code').setErrors(null);
          this.matStepper.next();
          this.ngUserManService.userLocalRemoveToken('codeToken');
          this.ngUserManService.userLocalSetToken('passwordResetToken', passwordResetToken);
        },
        err => {
          this.processing = false;
          if (err.error.code === 'wrongCredentials') {
            this.codeForm.get('code').setErrors({ invalidCode: true });
          } else if (err.error.code === 'maxTries') {
            this.codeForm.get('code').setErrors({ maxTries: true });
            this.codeForm.setValidators(this.validateService.maxTries);
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 3000);
            this.matSnackBar.open('Код невірний, спрпобуйте пізніше', '',
              { duration: 4000, panelClass: 'snack-bar-danger' });

          } else {
            this.codeForm.get('code').setErrors({ unrecognizedError: true });
          }
        }
      );
  }

  refresh() {
    // TODO: make refresh logic
    console.log('refresh');
  }

  onPasswordSubmit() {
    this.processing = true;
    const password = this.passwordForm.get('password').value;

    const passwordResetToken = this.ngUserManService.userLocalGetToken('passwordResetToken');

    this.ngUserManService.userPasswordReset(password, passwordResetToken)
      .subscribe(result => {
        // const token = result;
        this.processing = false;
        this.ngUserManService.userLocalRemoveToken('passwordResetToken');
        // this.ngUserManService.logging();
        this.sharedService.sharingEventToReloadComments();
        this.router.navigate(['/user', 'profile']);
        this.matSnackBar.open('Пароль відновлено', '',
          { duration: 3000, panelClass: 'snack-bar-danger' });
      },
        err => {
          this.processing = false;
          this.matSnackBar.open(err.error.message || 'Сталася помилка', '',
            { duration: 3000, panelClass: 'snack-bar-danger' });
        }
      );
  }

  goHomePage() {
    this.router.navigate(['/']);
  }

}
