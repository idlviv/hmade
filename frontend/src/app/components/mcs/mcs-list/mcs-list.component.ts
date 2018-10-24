import { Component, OnInit } from '@angular/core';
import { McService } from 'src/app/services/mc.service';
import { ActivatedRoute } from '@angular/router';
import { config } from 'src/app/app.config';

@Component({
  selector: 'app-mcs-list',
  templateUrl: './mcs-list.component.html',
  styleUrls: ['./mcs-list.component.scss']
})
export class McsListComponent implements OnInit {
  mcs: any;
  mcSortValue: string;

  constructor(
    private mcService: McService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(queryParams => {
        if (queryParams.mcSortValue) {
          // if passed master classes sort value
          this.mcSortValue = queryParams.mcSortValue;
        } else {
          // use defalt sort value
          this.mcSortValue = config.mcSortOptions[config.mcSortOptionsDefault].value;
        }

      }

      );

    this.mcService.getMcs()
      .subscribe((result) => this.mcs = result.data,
        err => console.log(err)
      );
  }

}
