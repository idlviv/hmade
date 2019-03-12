import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IComment } from 'src/app/interfaces/interface';
import { UserService } from 'src/app/services/user.service';
import { config } from '../../../app.config';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: IComment;
  @Output() deleteCommentEmitter = new EventEmitter<IComment>();
  @Output() displayCommentEmitter = new EventEmitter<any>();

  config = config;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  deleteComment(comment: IComment): void {
    this.deleteCommentEmitter.emit(comment);
  }

  displayComment(display: boolean, comment_id: string) {
    this.displayCommentEmitter.emit({display, comment_id});
  }

  allowTo(permitedRole: string): boolean {
    // this.user = this.userService.userCookieExtractor();
    return this.userService.allowTo(permitedRole);
  }

  restrictTo(restrictedRoles: string[]): boolean {
    // this.user = this.userService.userCookieExtractor();
    return this.userService.restrictTo(restrictedRoles);
  }
}
