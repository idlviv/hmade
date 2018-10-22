import { Component, OnInit } from '@angular/core';
import { McService } from 'src/app/services/mc.service';

@Component({
  selector: 'app-mcs-list',
  templateUrl: './mcs-list.component.html',
  styleUrls: ['./mcs-list.component.scss']
})
export class McsListComponent implements OnInit {
  mcs: any;

  constructor(
    private mcService: McService
  ) { }

  ngOnInit() {
    this.mcService.getMcs()
      .subscribe((result) => this.mcs = result.data,
        err => console.log(err)
      );
  }

}
