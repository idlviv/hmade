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
  mcSkipValue = config.mcSkipValue;
  mcLimitValue = config.mcLimitValue;
  constructor(
    private mcService: McService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams
    .pipe(
      mergeMap(
        queryParams => {
          if (
            !queryParams.mcSortValue ||
            !queryParams.mcFilterValue ||
            !queryParams.noMoreChildren
            // !queryParams.mcSkipValue ||
            // !queryParams.mcLimitValue
            ) {
            return of(null);
          }
          // take from params
          this.mcSortValue = queryParams.mcSortValue;
          this.mcFilterValue = queryParams.mcFilterValue;
          this.noMoreChildren = queryParams.noMoreChildren;
          // this.mcSkipValue = queryParams.mcSkipValue;
          // this.mcLimitValue = queryParams.mcLimitValue;
          return this.mcService.getMcsByFilter(
            this.mcFilterValue, this.mcSortValue, -1, this.mcSkipValue, this.mcLimitValue, this.noMoreChildren
            );
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
          // mcSkipValue: this.mcSkipValue,
          // mcLimitValue: this.mcLimitValue,
        });
      }
    },
      err => console.log(err)
    );
  }

}
