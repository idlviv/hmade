import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { config } from '../../../app.config';
import { IUser } from 'src/app/interfaces/user-interface';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

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
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
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

  deleteMcsItem(_id: string): void {
    console.log(`deleteMcsItem ${_id}`);
    // const confirmObject = <IConfirmPopupData>{
    //   message: `Дійсно видалити коментар: ${comment.comment} ?`,
    //   payload: {_id: comment._id}
    // };

    // const dialogRef = this.dialog.open(ConfirmPopupComponent, {
    //   data: confirmObject,
    //   // panelClass: 'custom-dialog-container'
    // });

    // dialogRef.afterClosed()
    //   .subscribe(res => {
    //       console.log('resp', res);
    //       if (res && res.choise) {
    //         this.socialService.deleteComment(this.parent_id, this.parentCategory, res.payload._id)
    //           .pipe(
    //             mergeMap(result => {
    //               console.log('result', result);
    //               if (result) {
    //                 // successfuly delete
    //                 return this.socialService.getComments(
    //                   this.parent_id, this.parentCategory, -1, 0, this.comments.length, !this.allowTo('manager')
    //                   );
    //               } else {
    //                 // not delete, do nothing
    //                 return of(null);
    //               }
    //             }
    //             )
    //           )
    //           .subscribe(result => {
    //             console.log('result', result);

    //             if (result) {
    //               this.comments = result.comments;
    //               this.commentsTotalLength = result.commentsTotalLength;
    //             }
    //           },
    //             err => console.log('add comment err', err)
    //           );
    //       }
    //     },
    //     err => console.log('err delete', err)
    //   );
  }

}
