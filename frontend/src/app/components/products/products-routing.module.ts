import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { Page404Component } from '../shared/page-404/page-404.component';

const productsRoutes: Routes = [
  {
    path: 'ch',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductsListComponent,
        // data: {
        //   dataTitle: 'title',
        //   dataMeta: 'descr'
        // }
      },
      {
        path: '',
        component: BreadcrumbComponent,
        outlet: 'breadcrumb',
      },
      {
        path: ':category_id',
        component: ProductsListComponent,
      },
      {
        path: ':category_id',
        component: BreadcrumbComponent,
        outlet: 'breadcrumb',
      },
      // {
      //   path: ':category_id',
      //   children: [
      //     {
      //       path: '',
      //       component: ProductsListComponent,
      //     },
      //     {
      //       path: '',
      //       component: BreadcrumbComponent,
      //       outlet: 'breadcrumb',
      //     },
      //   ]
      // },
      {
        path: ':category_id/details/:product_id',
        component: BreadcrumbComponent,
        outlet: 'breadcrumb',
      },
    ],
  },
  // {
  //   path: '**',
  //   redirectTo: '',
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      productsRoutes
    )],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }
