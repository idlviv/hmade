import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgUserManComponent } from './ng-user-man.component';


@NgModule({
  declarations: [
    NgUserManComponent,
  ],
  providers: [
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgUserManComponent,
  ],
})
export class NgUserManModule { }
