import { NgModule } from '@angular/core';
import { NgUserManComponent } from './ng-user-man.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
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
    NgUserManComponent,
    LoginComponent,
    DialogComponent,
    CreateComponent,
    PasswordResetComponent,
    ProfileComponent,
    RedirAfterOauthComponent,
  ],
  providers: [
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
    NgUserManComponent,
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
export class NgUserManModule { }
