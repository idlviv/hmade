import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SocialComponent } from './social.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { UnreadedCommentsComponent } from './unreaded-comments/unreaded-comments.component';

const socialRoutes: Routes = [
  {
    path: '',
    component: SocialComponent,
    children: [
      {
        path: 'unreaded-comments',
        component: UnreadedCommentsComponent,
        canActivate: [AuthGuard],
        data: { auth: 'user' },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(socialRoutes)],
  exports: [RouterModule]
})

export class SocialRoutingModule {}
