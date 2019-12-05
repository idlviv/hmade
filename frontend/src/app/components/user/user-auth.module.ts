import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPasswordResetComponent } from './user-password-reset/user-password-reset.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { SharedModule } from '../shared/shared.module';
import { RedirectionAfterOauthComponent } from './redirection-after-oauth/redirection-after-oauth.component';
import { UserModule } from 'ng-user-man';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@NgModule({
  declarations: [
    UserComponent,
    UserCreateComponent,
    UserLoginComponent,
    UserProfileComponent,
    UserPasswordResetComponent,
    RedirectionAfterOauthComponent,
    UserDialogComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    SharedModule,
    UserModule
  ],
  exports: [
  ],
})

export class UserAuthModule { }
