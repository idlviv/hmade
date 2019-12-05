import { Component, OnInit, Injector } from '@angular/core';
import { CatalogBreadcrumbComponent } from 'ng-user-man';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent extends CatalogBreadcrumbComponent implements OnInit {
  public topLevel = 'products';
  constructor( protected injector: Injector ) {
    super(injector);
   }

  ngOnInit() {
    super.ngOnInit();
  }
}
