import { Component, Input, OnInit } from '@angular/core';
import { config } from '../../../app.config';
import { ObservableMedia } from '@angular/flex-layout';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-item-brief',
  templateUrl: './product-item-brief.component.html',
  styleUrls: ['./product-item-brief.component.scss']
})

export class ProductItemBriefComponent implements OnInit {
  @Input() product;
  @Input() category_id;
  @Input() parentCategory_id;
  @Input() parentCategoryName;
  @Input() child;

  config = config;

  constructor(
    public media: ObservableMedia,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  allowTo(permitedRole: string): boolean {
    return this.userService.allowTo(permitedRole);
  }

}
