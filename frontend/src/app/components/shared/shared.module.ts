import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page-404/page-404.component';
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';
import { ProductItemBriefComponent } from './product-item-brief/product-item-brief.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { DesignPopupComponent } from './design-popup/design-popup.component';
import { CrslComponent } from './crsl/crsl.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { CommentsComponent } from './comments/comments.component';
import { ScreenTestComponent } from './screen-test/screen-test.component';
import { McsItemBriefComponent } from './mcs-item-brief/mcs-item-brief.component';
import { McsItemDetailComponent } from './mcs-item-detail/mcs-item-detail.component';
import { ProductItemFeedComponent } from './product-item-feed/product-item-feed.component';
import { ImagePopupComponent } from './image-popup/image-popup.component';
import { ScrollingDirective } from 'src/app/directives/scrolling.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    Page404Component,
    ProductItemBriefComponent,
    ProductItemDetailComponent,
    ProductItemFeedComponent,
    CrslComponent,
    FeedbackComponent,
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    ContentComponent,
    CommentsComponent,
    McsItemBriefComponent,
    McsItemDetailComponent
  ],
  declarations: [
    Page404Component,
    ConfirmPopupComponent,
    ProductItemBriefComponent,
    ProductItemDetailComponent,
    DesignPopupComponent,
    CrslComponent,
    FeedbackComponent,
    GalleryComponent,
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    ContentComponent,
    AboutComponent,
    CommentsComponent,
    ScreenTestComponent,
    McsItemBriefComponent,
    McsItemDetailComponent,
    ProductItemFeedComponent,
    ImagePopupComponent,
    ScrollingDirective,

  ],
})
export class SharedModule { }
