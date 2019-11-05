import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs';
import { SocialService } from 'src/app/services/social.service';
import { mergeMap } from 'rxjs/operators';
import { IConfirmPopupData, IComment } from 'src/app/interfaces/interface';
import { MatDialog } from '@angular/material';
import { ConfirmPopupComponent } from '../../shared/confirm-popup/confirm-popup.component';
import { SharedService } from 'ng-user-man';
import { NgUserManService } from 'ng-user-man';
import { IUser } from 'src/app/interfaces/user-interface';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  comments = <IComment[]>[];
  commentsTotalLength: number;
  @Input() parent_id: string;
  @Input() parentCategory: string;
  @Input() commentsReadedTillFilter: boolean;
  @Output() processedUnreadedComments = new EventEmitter<any>();

  processing = false;
  user: IUser;

  constructor(
    private ngUserManService: NgUserManService,
    private socialService: SocialService,
    public dialog: MatDialog,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.sharedService.getEventToReloadComments()
      .pipe(
        mergeMap(result => {
          if (result) {
            console.log('reload-list', result);
            const { sort, skip, limit, displayFilter } = result;
            // this.loadComments(sort, skip, limit, displayFilter);
            return this.socialService.getComments(this.parent_id, this.parentCategory,
              sort, skip, limit, displayFilter, this.commentsReadedTillFilter);
          } else {
            // not needed to reload, do nothing
            return of({ comments: [], commentsTotalLength: 0 });
          }
        }
        )
      )
      .subscribe(result => {
        if (result.comments.length) {
          this.comments = result.comments;
          this.commentsTotalLength = result.commentsTotalLength;
        }
      },
        err => console.log('add comment err', err)
      );

    this.loadComments(-1, 0, 5, !this.allowTo('manager'));
  }

  // Listening of page bottom reached
  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    if ((window.innerHeight + pageYOffset) >= document.body.offsetHeight - 2) {
      if (
        !this.processing &&
        this.commentsTotalLength !== this.comments.length &&
        this.commentsTotalLength
      ) {
        this.loadComments(-1, this.comments.length, 5, !this.allowTo('manager'));
      }
    }
  }

  loadComments(sort: number, skip: number, limit: number, displayFilter: boolean) {
    this.processing = true;
    this.socialService.getComments(this.parent_id, this.parentCategory, sort, skip, 
      limit, displayFilter, this.commentsReadedTillFilter)
      .subscribe(result => {
        this.comments.push(...result.comments);
        this.commentsTotalLength = result.commentsTotalLength;
        this.processing = false;
        this.checkAllCommentsLoaded();
      });
  }

  checkAllCommentsLoaded() {
    if (this.commentsTotalLength === this.comments.length) {
      this.processedUnreadedComments.emit(this.parent_id);
    }
  }

  deleteComment(event): void {
    const comment = event;
    const confirmObject = <IConfirmPopupData>{
      message: `Дійсно видалити коментар: ${comment.comment} ?`,
      payload: { _id: comment._id }
    };

    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      data: confirmObject,
      // panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed()
      .subscribe(res => {
        if (res && res.choise) {
          this.socialService.deleteComment(this.parent_id, this.parentCategory, res.payload._id)
            .pipe(
              mergeMap(result => {
                if (result) {
                  // successfuly delete
                  this.sharedService.sharingEventToReloadComments();
                  // this.sharedService.sharingEvent(['userChangeStatusEmitter']);
                  return this.socialService.getComments(
                    this.parent_id, this.parentCategory, -1, 0, this.comments.length,
                    !this.allowTo('manager'), this.commentsReadedTillFilter
                  );
                } else {
                  // not delete, do nothing
                  return of(null);
                }
              }
              )
            )
            .subscribe(result => {
              if (result) {
                this.comments = result.comments;
                this.commentsTotalLength = result.commentsTotalLength;
                this.checkAllCommentsLoaded();
              }
            },
              err => console.log('add comment err', err)
            );
        }
      },
        err => console.log('err delete', err)
      );
  }

  displayComment(event) {
    const display = event.display;
    const comment_id = event.comment_id;
    this.socialService.displayComment(this.parent_id, this.parentCategory, display, comment_id)
      .pipe(
        mergeMap(result => {
          if (result) {
            // successfuly updated
            this.sharedService.sharingEventToReloadComments();
            // this.sharedService.sharingEvent(['userChangeStatusEmitter']);
            return this.socialService.getComments(
              this.parent_id, this.parentCategory, -1, 0, this.comments.length, !this.allowTo('manager'), this.commentsReadedTillFilter
            );
          } else {
            // not added, do nothing
            return of({ comments: [], commentsTotalLength: 0 });
          }
        }
        )
      )
      .subscribe(result => {
        if (result.comments.length) {
          this.comments = result.comments;
          this.commentsTotalLength = result.commentsTotalLength;
          this.checkAllCommentsLoaded();
        }
      },
        err => console.log('add comment err', err)
      );
  }

  allowTo(permitedRole: string): boolean {
    this.user = this.ngUserManService.userCookieExtractor();
    return this.ngUserManService.allowTo(permitedRole);
  }

  restrictTo(restrictedRoles: string[]): boolean {
    this.user = this.ngUserManService.userCookieExtractor();
    return this.ngUserManService.restrictTo(restrictedRoles);
  }
}
