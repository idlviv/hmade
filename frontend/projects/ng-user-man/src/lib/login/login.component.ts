import { Component, OnInit, Inject, Injector, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { IUser } from '../interfaces';
import { NgUserManService } from '../ng-user-man.service';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;
  user: IUser;
  hidePassword = true;

  public config: any;
  protected ngUserManService: NgUserManService;
  protected sharedService: SharedService;
  protected router: Router;
  protected matSnackBar: MatSnackBar;

  /*
  * directive for reset form (invalid status)
  */
  @ViewChild(FormGroupDirective, { static: false }) userCreateFormDirective: FormGroupDirective;

  constructor(
    // protected matSnackBar: MatSnackBar,
    // protected ngUserManService: NgUserManService,
    // protected sharedService: SharedService,
    protected injector: Injector,
    // protected router: Router,
  ) {
    this.config = injector.get('config');
    this.ngUserManService = injector.get(NgUserManService);
    this.sharedService = injector.get(SharedService);
    this.router = injector.get(Router);
    this.matSnackBar = injector.get(MatSnackBar);
  }

  ngOnInit() {

    this.userLoginForm = new FormGroup({
      login: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  onUserLoginSubmit() {
    this.user = {
      login: this.userLoginForm.get('login').value,
      password: this.userLoginForm.get('password').value,
    } as IUser;

    this.ngUserManService.userLogin(this.user)
      .subscribe(
        result => {
          if (result === 'logged in') {
            this.resetForm();
            // this.ngUserManService.logging();
            this.sharedService.sharingEventToReloadComments();

            this.matSnackBar.open(`${this.user.login}, ви увійшли на сайт`, '', { duration: 5000 });
            this.router.navigate(['/user', 'profile']);
          }
        },
        err => {
          this.matSnackBar.open(err.error.message || 'Сталася помилка', '',
            { duration: 5000, panelClass: 'snack-bar-danger' });
        }
      );
  }

  resetForm() {
    if (this.userCreateFormDirective) {
      this.userCreateFormDirective.resetForm();
    }
  }

}
