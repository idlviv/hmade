import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogBreadcrumbComponent } from './catalog-breadcrumb/catalog-breadcrumb.component';
import { CatalogMainComponent } from './catalog-main/catalog-main.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [
    CatalogBreadcrumbComponent,
    CatalogMainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    CatalogBreadcrumbComponent,
    CatalogMainComponent,
    // RouterModule,
  ]
})
export class CatalogModule { }
