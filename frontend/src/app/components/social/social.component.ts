import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user-interface';
import { UserService } from 'src/app/services/user.service';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  user: IUser;
  unreadedComments: any[];
  
  constructor(
    private userService: UserService,
    private socialService: SocialService,
  ) { }

  ngOnInit() {

      if (this.allowTo('user')) {
        this.socialService.getUnreadedComments()
          .subscribe(
            result => this.unreadedComments = result,
            err => console.log('err', err)
          );
      }
    }

  allowTo(permitedRole: string): boolean {
    this.user = this.userService.userCookieExtractor();
    return this.userService.allowTo(permitedRole);
  }
}
