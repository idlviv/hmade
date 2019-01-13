import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { IUser } from '../../../interfaces/user-interface';
import { UserService } from '../../../services/user.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { config } from '../../../app.config';
declare const gapi: any;

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  config = config;
  userLoginForm: FormGroup;
  user: IUser;
  hidePassword = true;

  /**
   * directive for reset form (invalid status)
   */
  @ViewChild(FormGroupDirective) userCreateFormDirective: FormGroupDirective;

  constructor(
    private userService: UserService,
    private matSnackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userLoginForm = new FormGroup({
        login: new FormControl('', [
          Validators.required,
        ]),
        password: new FormControl('', [
          Validators.required,
        ]),
      },
    );
  }

  onUserLoginSubmit() {
    this.user = <IUser>{
      login: this.userLoginForm.get('login').value,
      password: this.userLoginForm.get('password').value,
    };

    this.userService.userLogin(this.user)
      .subscribe(
        token => {
          if (token) {
            this.resetForm();
            this.userService.logging();
            // const login = this.userService.userLocalGetCredentials().login;
            this.matSnackBar.open(`${this.user.login}, ви увійшли на сайт`, '', {duration: 5000});
            this.router.navigate(['/user', 'profile']);
          }
        },
        err => {
          this.matSnackBar.open(err.error.message || 'Сталася помилка', '',
            {duration: 5000, panelClass: 'snack-bar-danger'});
        }
      );
  }

  resetForm() {
    if (this.userCreateFormDirective) {
      this.userCreateFormDirective.resetForm();
    }
  }

}
