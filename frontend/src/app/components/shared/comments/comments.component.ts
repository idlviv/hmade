import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { IComment, IConfirmPopupData, IConfirmPopupChoise } from 'src/app/interfaces/interface';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/user-interface';
import { config } from '../../../app.config';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { SocialService } from 'src/app/services/social.service';
import { mergeMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  config = config;
  user: IUser;
  comments = <IComment[]>[];
  commentsTotalLength: number;
  @Input() parent_id: string;
  @Input() parentCategory: string;
  commentForm: FormGroup;
  @ViewChild('f') mcFormDirective: FormGroupDirective;
  @ViewChild('recaptchaRef') recaptchaRef;

  processing = false;

  constructor(
    private userService: UserService,
    private socialService: SocialService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

    this.commentForm = new FormGroup({
      comment: new FormControl(
        {
          value: '',
          disabled: !this.allowTo('user')
        },
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ,."@%-_\' ]+'),
          Validators.minLength(3),
          Validators.maxLength(150),
        ]),
        recaptcha: new FormControl('', [
          Validators.required
        ])
    });

    // this.userService.getUserLocal()
    // .subscribe(user => {
    //   this.user = user;
    // });
    this.user = this.userService.userLocalGetCredentials();

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
    this.socialService.getComments(this.parent_id, this.parentCategory, sort, skip, limit, displayFilter)
      .subscribe(result => {
        console.log('res', result);
        this.comments.push(...result.comments);
        this.commentsTotalLength = result.commentsTotalLength;
        this.processing = false;

      });
  }

  allowTo(permitedRole): boolean {
    return this.userService.allowTo(permitedRole);
  }

  sendComment() {
    const comment = this.commentForm.get('comment').value;
    const recaptcha = this.commentForm.get('recaptcha').value;
    this.socialService.addComment(this.parent_id, this.parentCategory, comment, recaptcha)
      .pipe(
        mergeMap(result => {
          if (result) {
            // successfuly added
            this.mcFormDirective.resetForm();
            return this.socialService.getComments(this.parent_id, this.parentCategory, -1, 0, 5, !this.allowTo('manager'));
          } else {
            // not added, do nothing
            return of({comments: [], commentsTotalLength: 0});
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
  }

  deleteComment(comment: IComment): void {
    const confirmObject = <IConfirmPopupData>{
      message: `Дійсно видалити коментар: ${comment.comment} ?`,
      payload: {_id: comment._id}
    };

    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      data: confirmObject,
      // panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed()
      .subscribe(res => {
          if (res.choise) {
            this.socialService.deleteComment(this.parent_id, this.parentCategory, res.payload._id)
              .pipe(
                mergeMap(result => {
                  if (result) {
                    // successfuly delete
                    return this.socialService.getComments(
                      this.parent_id, this.parentCategory, -1, 0, this.comments.length, !this.allowTo('manager')
                      );
                  } else {
                    // not delete, do nothing
                    return of({comments: [], commentsTotalLength: 0});
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
          }
        },
        err => console.log('err delete', err)
      );
  }

  displayComment(display: boolean, comment_id: string) {
    this.socialService.displayComment(this.parent_id, this.parentCategory, display, comment_id)
      .pipe(
        mergeMap(result => {
          if (result) {
            // successfuly updated
            return this.socialService.getComments(
              this.parent_id, this.parentCategory, -1, 0, this.comments.length, !this.allowTo('manager')
              );
          } else {
            // not added, do nothing
            return of({comments: [], commentsTotalLength: 0});
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
  }

}
