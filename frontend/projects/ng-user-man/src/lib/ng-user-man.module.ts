import { NgModule } from '@angular/core';
import { NgUserManComponent } from './ng-user-man.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { NgUserManService } from './ng-user-man.service';
// import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    NgUserManComponent,
    LoginComponent,
  ],
  providers: [
    // NgUserManService,
    // SharedService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    NgUserManComponent,
    LoginComponent,
  ]
})
export class NgUserManModule { }
