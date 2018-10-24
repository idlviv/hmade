import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { McsComponent } from './mcs.component';
import { McsListComponent } from './mcs-list/mcs-list.component';
import { McsFiltersComponent } from './mcs-filters/mcs-filters.component';

const mcsRoutes: Routes = [
  {
    path: 'ch',
    component: McsComponent,
    children: [
      {
        path: '',
        component: McsListComponent,
      },
      {
        path: '',
        component: McsFiltersComponent,
        outlet: 'mcsFilters',
      },
    //   {
    //     path: ':category_id/details/:product_id',
    //     component: ProductsDetailComponent,
    //   },
    //   {
    //     path: ':category_id/details/:product_id',
    //     component: BreadcrumbComponent,
    //     outlet: 'breadcrumb',
    //   },
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      mcsRoutes
    )],
  exports: [RouterModule]
})

export class McsRoutingModule {}
