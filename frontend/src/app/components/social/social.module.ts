import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnreadedCommentsComponent } from './unreaded-comments/unreaded-comments.component';
import { SocialRoutingModule } from './social-routing.module';
import { SocialComponent } from './social.component';

@NgModule({
  imports: [
    CommonModule,
    SocialRoutingModule,
  ],
  declarations: [
    UnreadedCommentsComponent,
    SocialComponent
  ]
})
export class SocialModule { }
