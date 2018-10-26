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

  constructor(
    private mcService: McService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams
    .pipe(
      mergeMap(
        queryParams => {
          console.log('query params', queryParams);
          if (queryParams.mcSortValue) {
            // if passed mc sort value
            this.mcSortValue = queryParams.mcSortValue;
          } else {
            // use defalt sort value
            this.mcSortValue = config.mcSortOptions[config.mcSortOptionsDefault].value;
          }
          if (queryParams.mcFilterValue) {
            // if passed mc sort value
            this.mcFilterValue = queryParams.mcFilterValue;
            console.log('not null');
            return this.mcService.getMcsByFilter(this.mcFilterValue, this.mcSortValue, -1, 0, 10, queryParams.noMoreChildren);
          } else {
            console.log('null');
            return of(null);
          }
        }
      )
    )
    .subscribe((result) => {
      this.mcs = result;
      console.log('this.mcs', this.mcs);
    },
      err => console.log(err)
    );
  }

}
