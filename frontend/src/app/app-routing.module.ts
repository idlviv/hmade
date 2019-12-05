import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { Page404Component } from './components/shared/page-404/page-404.component';
import { AuthGuard } from './guards/auth.guard';
import { FeedbackComponent } from './components/shared/feedback/feedback.component';
import { LandingComponent } from './components/shared/landing/landing.component';
import { AboutComponent } from './components/shared/about/about.component';
import { PrivacyComponent } from './components/shared/privacy/privacy.component';
import { LiteratureComponent } from './components/shared/literature/literature.component';

const appRoutes: Routes = [
  {
    path: 'products',
    loadChildren: './components/products/products.module#ProductsModule',
  },
  {
    path: 'mcs',
    loadChildren: './components/mcs/mcs.module#McsModule',
  },
  {
    path: 'comments',
    loadChildren: './components/social/social.module#SocialModule',
  },
  {
    path: 'about/ch',
    component: AboutComponent
  },
  {
    path: 'literature/ch',
    component: LiteratureComponent
  },
  {
    path: 'dashboard',
    loadChildren: './components/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard],
    data: { auth: 'user' },
  },
  {
    path: 'user',
    loadChildren: './components/user/user-auth.module#UserAuthModule'
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  { path: 'page-404', component: Page404Component },
  { path: '', component: LandingComponent, pathMatch: 'full' },
  // { path: '', loadChildren: './components/home/home.module#HomeModule', pathMatch: 'full' },
  { path: '**', component: Page404Component }, // MAKE redirect
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {preloadingStrategy: PreloadAllModules}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
