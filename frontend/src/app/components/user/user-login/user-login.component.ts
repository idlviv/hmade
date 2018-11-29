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

    // gapi.load('auth2', function() {
    //   const auth2 = gapi.auth2.init({
    //     client_id: '367222500405-f9n32rgpii2i10k9tq0btgffi21031mn.apps.googleusercontent.com',
    //     fetch_basic_profile: false,
    //     scope: 'profile'
    //   });

    //   gapi.signin2.render('my-signin2', {
    //     'scope': 'profile',
    //     'width': 240,
    //     'height': 50,
    //     'longtitle': true,
    //     'theme': 'light',
    //     // 'onsuccess': this.onGoogleSignIn(auth2),
    //     // 'onfailure': onFailure
    //   });

    //   auth2.signIn().then(function() {
    //     console.log(auth2.currentUser.get().getId());
    //   });

    //   console.log('auth2', auth2.currentUser.get().getId());
    // });

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

  onGoogleSignin() {
    console.log('google onGoogleSignin');
    this.userService.userGoogleLogin()
      .subscribe(
        result => {
          console.log('google login');
        },
        err => console.log('google login err', err)
      );
  }

  onUserLoginSubmit() {
    this.user = <IUser>{
      login: this.userLoginForm.get('login').value,
      password: this.userLoginForm.get('password').value,
    };

    this.userService.userLogin(this.user)
      .subscribe(
        result => {
          this.resetForm();
          const token = result.data;

          this.userService.userLocalLogin(token);
          this.matSnackBar.open(result.message, '', {duration: 3000});
          this.router.navigate(['/user', 'profile']);

        },
        err => {
          let message;
          if (err.error === 'maxTries') {
            message = 'Досягнуто максимальну кількість спроб, вхід тимчасово заблоковано';
          }
          this.matSnackBar.open(message || err.error, '',
            {duration: 3000, panelClass: 'snack-bar-danger'});
        }
      );
  }

  resetForm() {
    if (this.userCreateFormDirective) {
      this.userCreateFormDirective.resetForm();
    }
  }

}
