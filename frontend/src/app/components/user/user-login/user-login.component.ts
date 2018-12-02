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
    let that = this;

    // gapi.load('auth2', function() {
    //   gapi.auth2.init({
    //     client_id: '367222500405-0vu24vs5s1gi1kemsu6grvte6r5675rn.apps.googleusercontent.com',
    //     fetch_basic_profile: true,
    //     // scope: 'profile'
    //   });
    //   gapi.signin2.render('my-signin2', {
    //     'scope': 'profile',
    //     'width': 240,
    //     'height': 50,
    //     'longtitle': true,
    //     'theme': 'light',
    //     'onsuccess': onSignIn,
    //     // 'onfailure': onFailure
    //   });
    //   function onSignIn(googleUser) {
    //     const profile = googleUser.getBasicProfile();
    //     const id_token = googleUser.getAuthResponse().id_token;
    //     // that.onGoogleSignin(id_token);
    //     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //     console.log('Name: ' + profile.getName());
    //     console.log('Image URL: ' + profile.getImageUrl());
    //     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    //   }

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



  // googleSignOut() {
  //   const auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(function () {
  //     console.log('User signed out.');
  //   });
  // }

  userGoogleLogin() {
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
