import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ProductsComponent } from './products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductsDetailSideComponent } from './products-detail-side/products-detail-side.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [],
  declarations: [
    ProductsListComponent,
    BreadcrumbComponent,
    ProductsComponent,
    ProductsDetailComponent,
    ProductsDetailSideComponent,
  ]
})
export class ProductsModule { }
