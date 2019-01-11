import { Component, Input, OnInit } from '@angular/core';
import { config } from '../../../app.config';
import { ObservableMedia } from '@angular/flex-layout';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material';
import { IImagePopUpData } from 'src/app/interfaces/interface';
import { ImagePopupComponent } from '../image-popup/image-popup.component';

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
    private userService: UserService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  allowTo(permitedRole: string): boolean {
    return this.userService.allowTo(permitedRole);
  }

  openDialog(image, cloudinaryOptions, title): void {

    const imageObject = <IImagePopUpData>{
      image,
      cloudinaryOptions,
      title
    };

    const dialogRef = this.dialog.open(ImagePopupComponent, {
      data: imageObject,
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        },
        err => console.log('err delete', err)
      );
  }

}
