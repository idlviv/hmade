import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ProductsComponent } from './products.component';
import { CatalogModule } from 'ng-user-man';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    SharedModule,
    CatalogModule,
  ],
  exports: [],
  declarations: [
    ProductsListComponent,
    BreadcrumbComponent,
    ProductsComponent,
  ]
})
export class ProductsModule { }
