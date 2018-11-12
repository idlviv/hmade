import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IComment } from 'src/app/interfaces/interface';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/user-interface';
import { config } from '../../../app.config';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  config = config;
  user: IUser;
  @Input() comments: IComment[];
  commentForm: FormGroup;
  @ViewChild('f') mcFormDirective: FormGroupDirective;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {

    this.commentForm = new FormGroup({
      comment: new FormControl('', [
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
  }

  allowTo(permitedRole): Observable<boolean> {
    return this.userService.allowTo(permitedRole);
  }

  sendComment() {
    console.log('send Comment');
  }

}
