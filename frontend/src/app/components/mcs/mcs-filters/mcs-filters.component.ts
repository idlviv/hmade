import { Component, OnInit } from '@angular/core';
import { config } from '../../../app.config';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { CatalogService, ICatalog } from 'ng-user-man';
import { mergeMap, map } from 'rxjs/operators';
import { concat } from 'rxjs';
import { UserService } from 'ng-user-man';
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
  noMoreChildren = 'false';
  user: IUser;

  mcSortValue: string;
  mcFilterValue: string;
  filteredElementLevel: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private userService: UserService,
    private mcService: McService,
  ) { }

  ngOnInit() {
    this.filterForm = new FormGroup({
      mcSort: new FormControl([]),
      parents: new FormArray([
        this.initParents()
      ]),
    });

    const initialMcSortValue = this.mcService.mcLocalGetFilter() ?
      this.mcService.mcLocalGetFilter().mcSortValue : // use saved sort value
      config.mcSortOptions[config.mcSortOptionsDefault].value;  // use default sort value
    this.mcSortValue = initialMcSortValue;

    if (this.mcService.mcLocalGetFilter()) {
      const initialMcFilterValue = this.mcService.mcLocalGetFilter().mcFilterValue;
      const initialNoMoreChildrenValue = this.mcService.mcLocalGetFilter().noMoreChildren;
      this.mcFilterValue = initialMcFilterValue;
      this.noMoreChildren = initialNoMoreChildrenValue;
    } else {
      const initialMcFilterValue = 'products';
      const initialNoMoreChildrenValue = 'false';
      this.mcFilterValue = initialMcFilterValue;
      this.noMoreChildren = initialNoMoreChildrenValue;
    }
    this.catalogService.getChildren('products').pipe(
      mergeMap((result: ICatalog[]) => {
        this.children[0] = result;
        // initialize select values
        this.filterForm.get('mcSort').setValue(this.mcSortValue);
        return this.catalogService.getAllParents(this.mcFilterValue);
      })
    )
      .subscribe(
        result => {
          const sequenceOfObservables = [];
          result.hierarchy.splice(0, 2);
          if (result.hierarchy.length > 0) {
            result.hierarchy.map(
              (value, index) => {
                if (index !== 0) {
                  // if exists, run first
                  sequenceOfObservables.push(this.onSelectMcFilter(value._id, index - 1, false, true));
                }
              }
            );
            // run second
            sequenceOfObservables.push(this.onSelectMcFilter(result._id, result.hierarchy.length - 1, true, true));

            // execute chain of observables
            concat(...sequenceOfObservables).subscribe();
          } else {
            this.navigateTo();
          }
        },
        err => console.log('помилка завантаження категорій', err)
      );

    this.route.queryParams.subscribe(() => this.navigateTo());
  }

  onSelectMcSort(eventValue) {
    this.mcSortValue = eventValue;
    this.navigateTo();

  }

  onSelectMcFilter(eventValue, level, navigate, programmatic) {
    while (level + 1 < this.filterForm.get('parents')['controls'].length) {
      this.removeParents(this.filterForm.get('parents')['controls'].length - 1);
    }
    return this.catalogService.getChildren(eventValue)
      .pipe(map(
        (children: ICatalog[]) => {
          if (!children.length) {
            // if no children - show products
            this.parent_id = eventValue;
            this.noMoreChildren = 'true';
            this.children[level + 1] = children;
          } else {
            this.children[level + 1] = children;
            this.noMoreChildren = 'false';
            this.addParents();
          }
          if (programmatic) {
            this.filterForm.get('parents')['controls'][level].setValue(eventValue);
          }
          if (navigate) {
            this.mcFilterValue = eventValue;
            this.navigateTo();
          }
        },
        err => console.log('помилка завантаження категорій', err)
      )
      );

  }

  resetFilters() {
    this.mcSortValue = config.mcSortOptions[config.mcSortOptionsDefault].value;
    this.mcFilterValue = 'products';
    this.noMoreChildren = 'false';
    while (1 < this.filterForm.get('parents')['controls'].length) {
      this.removeParents(this.filterForm.get('parents')['controls'].length - 1);
    }
    this.filterForm.reset();
    this.filterForm.get('mcSort').setValue(this.mcSortValue);
    this.mcService.mcLocalSetFilter({
      mcSortValue: this.mcSortValue,
      mcFilterValue: this.mcFilterValue,
      noMoreChildren: this.noMoreChildren,
    });
    this.navigateTo();
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

  allowTo(permitedRole: string): boolean {
    return this.userService.allowTo(permitedRole);
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
