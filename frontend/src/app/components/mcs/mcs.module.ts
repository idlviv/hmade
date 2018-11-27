import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { McsComponent } from './mcs.component';
import { McsListComponent } from './mcs-list/mcs-list.component';
import { McsFiltersComponent } from './mcs-filters/mcs-filters.component';
import { McsRoutingModule } from './mcs-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    McsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
  ],
  declarations: [
    McsComponent,
    McsListComponent,
    McsFiltersComponent,
  ]
})
export class McsModule { }
