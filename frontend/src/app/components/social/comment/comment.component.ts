import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IComment } from 'src/app/interfaces/interface';
import { NgUserManService } from 'ng-user-man';
import { config } from '../../../app.config';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: any;
  @Output() deleteCommentEmitter = new EventEmitter<IComment>();
  @Output() displayCommentEmitter = new EventEmitter<any>();

  config = config;

  constructor(
    private ngUserManService: NgUserManService,
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
    // this.user = this.ngUserManService.userCookieExtractor();
    return this.ngUserManService.allowTo(permitedRole);
  }

  restrictTo(restrictedRoles: string[]): boolean {
    // this.user = this.ngUserManService.userCookieExtractor();
    return this.ngUserManService.restrictTo(restrictedRoles);
  }
}
