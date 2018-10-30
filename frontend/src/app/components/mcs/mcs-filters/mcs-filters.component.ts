import { Component, OnInit } from '@angular/core';
import { config } from '../../../app.config';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { CatalogService } from 'src/app/services/catalog.service';
import { mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/user-interface';

@Component({
  selector: 'app-mcs-filters',
  templateUrl: './mcs-filters.component.html',
  styleUrls: ['./mcs-filters.component.scss']
})
export class McsFiltersComponent implements OnInit {
  children = [];
  config = config;
  filterForm: FormGroup;
  parent_id: string;
  noMoreChildren = false;
  user: IUser;

  mcSortValue: string;
  mcFilterValue: string;

  constructor(
    private router: Router,
    private catalogService: CatalogService,
    private userService: UserService,
  ) { }

  ngOnInit() {

    this.userService.getUserLocal()
    .subscribe(user => this.user = user);

    this.filterForm = new FormGroup({
      mcSort: new FormControl([]),
      parents : new FormArray([this.initParents()]),
    });

    this.catalogService.getChildren('products')
    .subscribe(
      result => {
        this.children[0] = result.data;

        // initialize select values
        const initialMcSortValue = config.mcSortOptions[config.mcSortOptionsDefault].value;
        this.filterForm.get('mcSort').setValue(initialMcSortValue);
        this.mcSortValue = initialMcSortValue;

        const initialMcFilterValue = result.data[0].parent;
        this.mcFilterValue = initialMcFilterValue;
        this.navigateTo();

      },
      err => console.log('помилка завантаження категорій', err)
    );
  }

  onSelectMcSort(event) {
    // const mcSortValue = event.value;
    this.mcSortValue = event.value;
    this.navigateTo();

  }

  onSelectMcFilter(event, level) {
    console.log('select filter');
    this.mcFilterValue = event.value;
    while (level + 1 < this.filterForm.get('parents')['controls'].length) {
      this.removeParents(this.filterForm.get('parents')['controls'].length - 1);
    }

    this.catalogService.getChildren(event.value)
      .subscribe(
        children => {
          if (!children.data.length) {
            // if no children - show products
            this.parent_id = event.value;
            this.noMoreChildren = true;
            this.children[level + 1] = children.data;
            this.navigateTo();
        } else {
            this.children[level + 1] = children.data;
            this.noMoreChildren = false;
            this.addParents();
            this.navigateTo();

            // return this.productService.getProductsByParent(null, 'products', true);
          }
      },
        err => console.log('помилка завантаження категорій', err)
      );
  }

  navigateTo() {
    this.router.navigate(['/mcs/ch'], {
      queryParams: {
        mcSortValue: this.mcSortValue,
        mcFilterValue: this.mcFilterValue,
        noMoreChildren: this.noMoreChildren,
      }
    });
  }

  addMcsItem(parent_id) {
    this.router.navigate(['/dashboard', 'mc', 'new', parent_id]);
  }

  addParents() {
    const control = <FormArray>this.filterForm.get('parents');
    control.push(this.initParents());
  }

  removeParents(i: number) {
    const control = <FormArray>this.filterForm.get('parents');
    control.removeAt(i);
  }

  initParents() {
    return new FormControl('', [
      Validators.required,
    ]);
  }

}
