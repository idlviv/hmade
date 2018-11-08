import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { McsComponent } from './mcs.component';
import { McsListComponent } from './mcs-list/mcs-list.component';
import { McsFiltersComponent } from './mcs-filters/mcs-filters.component';
import { McsItemDetailComponent } from './mcs-item-detail/mcs-item-detail.component';

const mcsRoutes: Routes = [
  {
    path: 'ch',
    component: McsComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'mcFilter'
      // },
      {
        path: '',
        component: McsListComponent,
      },
      {
        path: '',
        component: McsFiltersComponent,
        outlet: 'mcsFilters',
      },
    ],
  },
  {
    path: 'show/:_id',
    component: McsItemDetailComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      mcsRoutes
    )],
  exports: [RouterModule]
})

export class McsRoutingModule {}
