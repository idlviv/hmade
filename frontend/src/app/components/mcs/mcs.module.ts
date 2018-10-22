import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McsComponent } from './mcs.component';
import { McsListComponent } from './mcs-list/mcs-list.component';
import { McsFiltersComponent } from './mcs-filters/mcs-filters.component';
import { McsRoutingModule } from './mcs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    McsRoutingModule
  ],
  declarations: [McsComponent, McsListComponent, McsFiltersComponent]
})
export class McsModule { }
