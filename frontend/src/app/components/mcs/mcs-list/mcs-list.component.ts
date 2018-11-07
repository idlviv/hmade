import { Component, OnInit } from '@angular/core';
import { McService } from 'src/app/services/mc.service';
import { ActivatedRoute } from '@angular/router';
import { config } from 'src/app/app.config';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-mcs-list',
  templateUrl: './mcs-list.component.html',
  styleUrls: ['./mcs-list.component.scss']
})
export class McsListComponent implements OnInit {
  mcs: any;
  mcSortValue: string;
  mcFilterValue: string;
  noMoreChildren: string;

  constructor(
    private mcService: McService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams
    .pipe(
      mergeMap(
        queryParams => {
          if (!queryParams.mcSortValue || queryParams.mcFilterValue || queryParams.noMoreChildren) {
            return of (null);
          }
          this.mcSortValue = queryParams.mcSortValue;
          this.mcFilterValue = queryParams.mcFilterValue;
          this.noMoreChildren = queryParams.noMoreChildren;
          return this.mcService.getMcsByFilter(this.mcFilterValue, this.mcSortValue, -1, 0, 10, this.noMoreChildren);
          // this.noMoreChildren = queryParams.noMoreChildren;
          // if (queryParams.mcSortValue) {
          //   // if passed mc sort value
          //   this.mcSortValue = queryParams.mcSortValue;
          // } else {
          //   this.mcSortValue = this.mcService.mcLocalGetFilter() ?
          //     this.mcService.mcLocalGetFilter().mcSortValue : // use saved sort value
          //     config.mcSortOptions[config.mcSortOptionsDefault].value;  // use default sort value
          // }
          // if (queryParams.mcFilterValue) {
          //   // if passed mc filter value
          //   this.mcFilterValue = queryParams.mcFilterValue;
          //   return this.mcService.getMcsByFilter(this.mcFilterValue, this.mcSortValue, -1, 0, 10, this.noMoreChildren);
          // } else if (this.mcService.mcLocalGetFilter()) {
          //   // use saved filter value
          //   this.mcFilterValue = this.mcService.mcLocalGetFilter().mcFilterValue;
          //   return this.mcService.getMcsByFilter(this.mcFilterValue, this.mcSortValue, -1, 0, 10, this.noMoreChildren);
          // } else {
          //   // without filter
          //   this.mcFilterValue = 'products';
          //   this.noMoreChildren = 'false';
          //   return this.mcService.getMcsByFilter(this.mcFilterValue, this.mcSortValue, -1, 0, 10, 'false');
          //   // return of(null);
          // }
        }
      )
    )
    .subscribe((result) => {
      this.mcs = result;
      if (result) {
        this.mcService.mcLocalSetFilter({
        mcSortValue: this.mcSortValue,
        mcFilterValue: this.mcFilterValue,
        noMoreChildren: this.noMoreChildren,
      });
      }
    },
      err => console.log(err)
    );
  }

}
