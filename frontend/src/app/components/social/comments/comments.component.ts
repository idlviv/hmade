import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { IComment, IConfirmPopupData, IConfirmPopupChoise } from 'src/app/interfaces/interface';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/user-interface';
import { config } from '../../../app.config';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { of } from 'rxjs';
import { SocialService } from 'src/app/services/social.service';
import { mergeMap } from 'rxjs/operators';
// import { MatDialog } from '@angular/material';
// import { ConfirmPopupComponent } from '../../shared/confirm-popup/confirm-popup.component';
import { SharedService } from '../../../services/shared.service';

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

  constructor(
    private userService: UserService,
    private socialService: SocialService,
    // public dialog: MatDialog,
    private sharedService: SharedService,
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
        // recaptcha: new FormControl('', [
        //   Validators.required
        // ])
    });
  }

  sendComment() {
    const comment = this.commentForm.get('comment').value;
    // const recaptcha = this.commentForm.get('recaptcha').value;
    const recaptcha = 'sdfsd';
    
    this.socialService.addComment(this.parent_id, this.parentCategory, comment, recaptcha)
      .subscribe(result => {
          this.mcFormDirective.resetForm();
          this.sharedService.sharingEventToReloadComments({
            sort: -1,
            skip: 0,
            limit: 6,
            displayFilter: !this.allowTo('manager'),
          });
      },
      err => console.log('add comment err', err)
    );
  }

  allowTo(permitedRole: string): boolean {
    this.user = this.userService.userCookieExtractor();
    return this.userService.allowTo(permitedRole);
  }

  restrictTo(restrictedRoles: string[]): boolean {
    this.user = this.userService.userCookieExtractor();
    return this.userService.restrictTo(restrictedRoles);
  }
}
