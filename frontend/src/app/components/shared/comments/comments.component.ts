import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IComment } from 'src/app/interfaces/interface';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/user-interface';
import { config } from '../../../app.config';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { SocialService } from 'src/app/services/social.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  config = config;
  user: IUser;
  comments: IComment[];
  @Input() parent_id: string;
  @Input() parent_category: string;
  commentForm: FormGroup;
  @ViewChild('f') mcFormDirective: FormGroupDirective;

  constructor(
    private userService: UserService,
    private socialService: SocialService,
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
      // commentator: new FormControl('', [
      //   Validators.required,
      //   Validators.pattern('[a-z0-9]+'),
      // ]),
    });

    this.userService.getUserLocal()
    .subscribe(user => {
      console.log('user', user);
      this.user = user;
    });

    this.socialService.getComments(this.parent_id, -1, 0, 10, false)
      .subscribe(result => this.comments = result);
  }

  allowTo(permitedRole): boolean {
    return this.userService.allowTo(permitedRole);
  }

  sendComment() {
    const comment = this.commentForm.get('comment').value;
    this.socialService.addComment(this.parent_id, this.parent_category, comment).pipe(
      mergeMap(result => {
        if (result) {
          this.mcFormDirective.resetForm();
          return this.socialService.getComments(this.parent_id, -1, 0, 10, false);
        } else {
          return of([]);
        }
      }
      )
    )
      .subscribe(result => {
        if (result.length) {
          this.comments = result;
        }
        console.log('send Comment result', result);
      },
      err => console.log('send Comment err', err));
  }

}
