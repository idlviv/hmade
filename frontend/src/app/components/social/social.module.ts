import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { UnreadedCommentsComponent } from './unreaded-comments/unreaded-comments.component';
import { SocialRoutingModule } from './social-routing.module';
import { SocialComponent } from './social.component';
import { CommentsComponent } from './comments/comments.component';
import { SharedModule } from '../shared/shared.module';
import { CommentComponent } from './comment/comment.component';
import { CommentsListComponent } from './comments-list/comments-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SocialRoutingModule,
    SharedModule,
    RecaptchaFormsModule,
    RecaptchaModule
  ],
  declarations: [
    UnreadedCommentsComponent,
    SocialComponent,
    CommentsComponent,
    CommentComponent,
    CommentsListComponent,
  ],
  exports: [
    CommentsComponent,
    CommentsListComponent,
  ]
})
export class SocialModule { }
