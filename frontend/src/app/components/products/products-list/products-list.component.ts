import { Component, OnInit, Injector } from '@angular/core';
import { CatalogMainComponent } from 'ng-user-man';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent extends CatalogMainComponent implements OnInit {

  protected collection = 'products';
  protected topLevel = 'products';

  constructor( protected injector: Injector ) {
    super(injector);
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
