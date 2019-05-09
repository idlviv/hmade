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
import { ScreenTestComponent } from './screen-test/screen-test.component';
import { ProductItemFeedComponent } from './product-item-feed/product-item-feed.component';
import { ImagePopupComponent } from './image-popup/image-popup.component';
import { ScrollingDirective } from 'src/app/directives/scrolling.directive';
import { PrivacyComponent } from './privacy/privacy.component';
import { LiteratureComponent } from './literature/literature.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
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
    ScreenTestComponent,
    ProductItemFeedComponent,
    ImagePopupComponent,
    ScrollingDirective,
    PrivacyComponent,
    LiteratureComponent,
    ChatComponent,
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
    AboutComponent,
    LiteratureComponent
  ],
})
export class SharedModule { }
