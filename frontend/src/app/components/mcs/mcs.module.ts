import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { McsComponent } from './mcs.component';
import { McsListComponent } from './mcs-list/mcs-list.component';
import { McsFiltersComponent } from './mcs-filters/mcs-filters.component';
import { McsRoutingModule } from './mcs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SocialModule } from '../social/social.module';
import { McsItemBriefComponent } from './mcs-item-brief/mcs-item-brief.component';
import { McsItemDetailComponent } from './mcs-item-detail/mcs-item-detail.component';

@NgModule({
  imports: [
    CommonModule,
    McsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    SocialModule
  ],
  declarations: [
    McsComponent,
    McsListComponent,
    McsFiltersComponent,
    McsItemBriefComponent,
    McsItemDetailComponent,
  ],
  exports: [
  ],
})
export class McsModule { }
