import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { config } from '../../../app.config';
import { ObservableMedia } from '@angular/flex-layout';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material';
import { IImagePopUpData, IConfirmPopupData } from 'src/app/interfaces/interface';
import { ImagePopupComponent } from '../image-popup/image-popup.component';
import { mergeMap } from 'rxjs/operators';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';
import { ProductService } from 'src/app/services/product.service';
import { of } from 'rxjs/internal/observable/of';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

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
  @Output() refreshProducts = new EventEmitter<boolean>();

  config = config;

  constructor(
    public media: ObservableMedia,
    private userService: UserService,
    public dialog: MatDialog,
    private productService: ProductService,
    private matSnackBar: MatSnackBar,
    private router: Router,
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

  onCatalogRouting(child) {
    if (child) {
      this.router.navigate(['/products', 'ch',
        { outlets: { primary: [child._id], breadcrumb: [child._id] } }],
        {
          queryParams: {
            seoTitle: child.seoTitle,
            seoMeta: child.seoMeta
          }
        }
       );
    }
  }

  deleteProductItem(_id: string, name: string) {
    console.log('_id, name', _id, name);
    const confirmObject = <IConfirmPopupData>{
      message: `Дійсно видалити: ${name} ?`,
      payload: { _id }
    };

    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      data: confirmObject,
      // panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed()
      .pipe(
        mergeMap(result => {
          if (result && result.choise) {
            return this.productService.deleteProduct(result.payload._id);
          }
          return of(null);
        })
      )
      .subscribe(result => {
        if (result) {
          this.refreshProducts.emit();
          this.matSnackBar.open(result, '',
            { duration: 3000, panelClass: 'snack-bar-danger' })
        }
      },
        err => this.matSnackBar.open(err.error.message || 'Сталася помилка', '',
          { duration: 3000, panelClass: 'snack-bar-danger' })
      );
  }

}
