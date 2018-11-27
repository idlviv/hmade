import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { config } from '../../../app.config';
import { IUser } from 'src/app/interfaces/user-interface';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mcs-item-brief',
  templateUrl: './mcs-item-brief.component.html',
  styleUrls: ['./mcs-item-brief.component.scss']
})
export class McsItemBriefComponent implements OnInit, OnChanges {

  user: IUser;
  config = config;

  @Input() mc;
  @Input() parentCategory_id;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
  this.userService.getUserLocal()
    .subscribe(user => this.user = user);
  }

  allowTo(permitedRole): boolean {
    return this.userService.allowTo(permitedRole);
  }

  ngOnChanges(changes: SimpleChanges) {
    const productChange: SimpleChange = changes.mc;
    // console.log('prev value: ', productChange.previousValue);
    // console.log('got name: ', productChange.currentValue);
    // console.log('productChange: ', productChange);
    if (productChange) {
      // console.log('simple changes product');
      // this.getRecommendations();
    }
  }

  goToMcsItemDetail(_id) {
    console.log(`goToMcsItemDetail ${_id}`);
    this.router.navigate(['/mcs', 'show', _id]);

  }

  editMcsItem(_id) {
    console.log(`editMcsItem ${_id}`);
    this.router.navigate(['/dashboard', 'mc', 'edit', _id]);
  }

  deleteMcsItem(_id) {
    console.log(`deleteMcsItem ${_id}`);
  }

}
