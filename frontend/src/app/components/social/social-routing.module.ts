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
    //    {
    //     path: '',
    //     component: DashboardSidenavComponent,
    //     outlet: 'dashboardSidenav',
    //     canActivate: [AuthGuard],
    //     data: { auth: 'manager' },
    //   },
      {
        path: '',
        component: UnreadedCommentsComponent,
        canActivate: [AuthGuard],
        data: { auth: 'user' },
      },
    //   {
    //     path: 'tools',
    //     component: ToolsComponent,
    //     canActivate: [AuthGuard],
    //     data: { auth: 'manager' },
    //   },
    //   {
    //     path: 'product-editor',
    //     component: ProductEditorComponent,
    //     canActivate: [AuthGuard],
    //     data: { auth: 'manager' },
    //   },
    //   {
    //     path: 'product-editor-new/:parentCategory_id/:parentCategoryName',
    //     component: ProductEditorFormComponent,
    //     canActivate: [AuthGuard],
    //     data: { auth: 'manager' },
    //   },
    //   {
    //     path: 'product-editor-edit/:parentCategory_id/:parentCategoryName/:_id',
    //     component: ProductEditorFormComponent,
    //     canActivate: [AuthGuard],
    //     data: { auth: 'manager' },
    //   },
    //   {
    //     path: 'mc-editor',
    //     component: McEditorComponent,
    //     canActivate: [AuthGuard],
    //     data: { auth: 'manager' },
    //   },
    //   {
    //     path: 'mc/new/:parent_id',
    //     component: McEditorFormComponent,
    //     canActivate: [AuthGuard],
    //     data: { auth: 'manager' },
    //   },
    //   {
    //     path: 'mc/edit/:_id',
    //     component: McEditorFormComponent,
    //     canActivate: [AuthGuard],
    //     data: { auth: 'manager' },
    //   },

    //   {
    //     path: 'profile',
    //     component: UserProfileComponent,
    //   },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      socialRoutes
    )],
  exports: [RouterModule]
})

export class SocialRoutingModule {}
