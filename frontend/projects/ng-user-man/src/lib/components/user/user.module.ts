import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DialogComponent } from './dialog/dialog.component';
import { CreateComponent } from './create/create.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ProfileComponent } from './profile/profile.component';
import { RedirAfterOauthComponent } from './redir-after-oauth/redir-after-oauth.component';


@NgModule({
  declarations: [
    LoginComponent,
    DialogComponent,
    CreateComponent,
    PasswordResetComponent,
    ProfileComponent,
    RedirAfterOauthComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  exports: [
    LoginComponent,
    CreateComponent,
    PasswordResetComponent,
    ProfileComponent,
    RedirAfterOauthComponent
  ],
  entryComponents: [
    DialogComponent,
  ]
})
export class UserModule { }
