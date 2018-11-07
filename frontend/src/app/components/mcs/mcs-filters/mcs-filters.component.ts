import { Component, OnInit } from '@angular/core';
import { config } from '../../../app.config';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { CatalogService } from 'src/app/services/catalog.service';
import { mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/user-interface';
import { McService } from 'src/app/services/mc.service';

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
  filteredElementLevel: number;

  constructor(
    private router: Router,
    private catalogService: CatalogService,
    private userService: UserService,
    private mcService: McService,
  ) { }

  ngOnInit() {

    this.userService.getUserLocal()
    .subscribe(user => this.user = user);

    this.filterForm = new FormGroup({
      mcSort: new FormControl([]),
      parents : new FormArray([this.initParents()]),
    });

    const initialMcSortValue = this.mcService.mcLocalGetFilter() ?
        this.mcService.mcLocalGetFilter().mcSortValue : // use saved sort value
        config.mcSortOptions[config.mcSortOptionsDefault].value;  // use default sort value
    this.mcSortValue = initialMcSortValue;

    const initialMcFilterValue = this.mcService.mcLocalGetFilter() ?
        this.mcService.mcLocalGetFilter().mcFilterValue : // use saved filter value
        'products';
    this.mcFilterValue = initialMcFilterValue;

    this.catalogService.getChildren('products').pipe(
      mergeMap(result => {
        this.children[0] = result.data;
        // initialize select values
        this.filterForm.get('mcSort').setValue(this.mcSortValue);
        return this.catalogService.getAllParents(this.mcFilterValue);
      })
    )
    .subscribe(
      result => {
        result.hierarchy.splice(0, 2);
        if (result.hierarchy.length) {
          result.hierarchy.map(
            (value, index) => {
              this.filterForm.get('parents')['controls'][index].setValue(value._id);
              this.onSelectMcFilter(value._id, index, result.hierarchy.length === index - 1);
            }
          );

        }
    },
      err => console.log('помилка завантаження категорій', err)
    );
  }

  onSelectMcSort(eventValue) {
    this.mcSortValue = eventValue;
    this.navigateTo();

  }

  onSelectMcFilter(eventValue, level, navigate) {

    console.log('this.mcFilterValue3', this.mcFilterValue);

    while (level + 1 < this.filterForm.get('parents')['controls'].length) {
      this.removeParents(this.filterForm.get('parents')['controls'].length - 1);
    }

    this.catalogService.getChildren(eventValue)
      .subscribe(
        children => {
          if (!children.data.length) {
            // if no children - show products
            this.parent_id = eventValue;
            this.noMoreChildren = true;
            this.children[level + 1] = children.data;

        } else {
            this.children[level + 1] = children.data;
            this.noMoreChildren = false;
            this.addParents();
          }
          if (navigate) {
            this.mcFilterValue = eventValue;
            this.navigateTo();
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
