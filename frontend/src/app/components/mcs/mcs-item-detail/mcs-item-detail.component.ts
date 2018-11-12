import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { McService } from 'src/app/services/mc.service';
import { IMc } from 'src/app/interfaces/interface';
import { config } from 'src/app/app.config';

@Component({
  selector: 'app-mcs-item-detail',
  templateUrl: './mcs-item-detail.component.html',
  styleUrls: ['./mcs-item-detail.component.scss']
})
export class McsItemDetailComponent implements OnInit {
  config = config;
  mc: IMc;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mcService: McService,
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      mergeMap(
        (params) => {
          return this.mcService.getMcById(params._id);
        })
      )
      .subscribe((result) => {
        this.mc = result;
        console.log('result', result);
      });
  }

  goToMcs() {
    this.router.navigate(['/mcs', 'ch']);
  }

}
