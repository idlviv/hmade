import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardSidenavComponent } from './dashboard-sidenav/dashboard-sidenav.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { AuthGuard } from '../../guards/auth.guard';
import { ProductsComponent } from '../products/products.component';
import { ToolsComponent } from './tools/tools.component';
import { UserCreateComponent } from '../user/user-create/user-create.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductEditorFormComponent } from './product-editor-form/product-editor-form.component';
import { McEditorComponent } from './mc-editor/mc-editor.component';
import { McEditorFormComponent } from './mc-editor-form/mc-editor-form.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
       {
        path: '',
        component: DashboardSidenavComponent,
        outlet: 'dashboardSidenav',
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: '',
        component: UserProfileComponent,
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: 'tools',
        component: ToolsComponent,
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: 'product-editor',
        component: ProductEditorComponent,
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: 'product-editor-new/:parentCategory_id/:parentCategoryName',
        component: ProductEditorFormComponent,
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: 'product-editor-edit/:parentCategory_id/:parentCategoryName/:_id',
        component: ProductEditorFormComponent,
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: 'mc-editor',
        component: McEditorComponent,
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: 'mc/new/:parent_id',
        component: McEditorFormComponent,
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: 'mc/edit/:_id',
        component: McEditorFormComponent,
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },

      // {
      //   path: 'product-create',
      //   component: ProductCreateComponent,
      // },
      // {
      //   path: 'product-edit/:_id',
      //   component: ProductCreateComponent,
      //   canActivate: [AuthGuard],
      //   data: { auth: 'manager' },
      // },
      // {
      //   path: 'product-edit',
      //   component: ProductCreateComponent,
      //   canActivate: [AuthGuard],
      //   data: { auth: 'manager' },
      // },
      // {
      //   path: 'dashboard-signup',
      //   component: UserCreateComponent,
      //   canActivate: [AuthGuard],
      //   data: { auth: 'manager' },
      // },
      {
        path: 'profile',
        component: UserProfileComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      dashboardRoutes
    )],
  exports: [RouterModule]
})

export class DashboardRoutingModule {}
