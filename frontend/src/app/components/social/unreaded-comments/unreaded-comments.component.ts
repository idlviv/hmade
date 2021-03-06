import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user-interface';
import { NgUserManService, UserService } from 'ng-user-man';
import { SocialService } from 'src/app/services/social.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-unreaded-comments',
  templateUrl: './unreaded-comments.component.html',
  styleUrls: ['./unreaded-comments.component.scss']
})
export class UnreadedCommentsComponent implements OnInit, AfterViewInit {
  user: IUser;
  unreadedCommentsParents: any[];
  processedUnreadedCommentsParents = [];
  pageLoaded = false;

  constructor(
    private ngUserManService: NgUserManService,
    private userService: UserService,
    private socialService: SocialService,
  ) { }

  ngAfterViewInit() {
  }

  ngOnInit() {
    if (this.allowTo('user')) {
      this.socialService.getUnreadedCommentsCategories()
        .subscribe(
          result => {
            this.processedUnreadedCommentsParents = [];
            this.unreadedCommentsParents = [];
            if (result.length) {
              this.unreadedCommentsParents = result;
              this.processedUnreadedCommentsParents.push(result[0]);
            }
            this.pageLoaded = true;
          },
          err => console.log('err', err)
        );

      this.ngUserManService.getEventToReloadComments()
        .pipe(mergeMap(() => this.socialService.getUnreadedCommentsCategories()))
        .subscribe(
          result => {
            this.processedUnreadedCommentsParents = [];
            this.unreadedCommentsParents = [];
            if (result.length) {
              this.unreadedCommentsParents = result;
              this.processedUnreadedCommentsParents.push(result[0]);
            }
            this.pageLoaded = true;
          },
          err => console.log('err', err)
        );
    }
  }

  markCommentsAsReaded() {
    this.userService.userEditUnsecure({name: 'commentsReadedTill'})
    .subscribe(
      res => {
        this.ngUserManService.sharingEventToReloadComments();
      },
      err => console.log('err', err)
    );
  }

  onProcessedUnreadedComments(event) {

    if (this.processedUnreadedCommentsParents.map((value) => value._id).indexOf(event) > -1) {
      // event value (parent_id) is already in processed array
      for (let i = 0; i < this.unreadedCommentsParents.length; i++) {
        if (this.processedUnreadedCommentsParents.map((val) => val._id).indexOf(this.unreadedCommentsParents[i]._id) === -1) {
          // mapping array of all unproceed _ids and add next unproceed _id to proceed array
          console.log('in', this.processedUnreadedCommentsParents.map((value) => value._id).indexOf(this.unreadedCommentsParents[i]._id));
          this.processedUnreadedCommentsParents.push(this.unreadedCommentsParents[i]);
          break;
        }
      }
    } else {
      // this.processedUnreadedCommentsParents.push(event);
    }
  }

  allowTo(permitedRole: string): boolean {
    this.user = this.userService.userCookieExtractor();
    return this.userService.allowTo(permitedRole);
  }
}
