import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user-interface';
import { UserService } from 'src/app/services/user.service';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-unreaded-comments',
  templateUrl: './unreaded-comments.component.html',
  styleUrls: ['./unreaded-comments.component.scss']
})
export class UnreadedCommentsComponent implements OnInit {
  user: IUser;
  unreadedCommentsCategories: any[];
  downloadedUnreadedCommentsCategories = [];

  constructor(
    private userService: UserService,
    private socialService: SocialService,
  ) { }

  ngOnInit() {
      if (this.allowTo('user')) {
        this.socialService.getUnreadedCommentsCategories()
          .subscribe(
            result => {
              this.unreadedCommentsCategories = result;
              this.downloadedUnreadedCommentsCategories.push(result[0]);
            },
            err => console.log('err', err)
          );
      }
    }

  onUnreadedCommentsOfCategorieDownloaded(event) {
    this.unreadedCommentsCategories.map((el, index) => {
      if (el._id === event) {
        this.downloadedUnreadedCommentsCategories.push(this.unreadedCommentsCategories[index + 1]);
      }
    });
    console.log('onUnreadedCommentsOfCategorieDownloaded-event', event);
  }

  allowTo(permitedRole: string): boolean {
    this.user = this.userService.userCookieExtractor();
    return this.userService.allowTo(permitedRole);
  }
}
