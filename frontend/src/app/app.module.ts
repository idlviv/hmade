import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';

import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { config } from './app.config';
import { ConfirmPopupComponent } from './components/shared/confirm-popup/confirm-popup.component';
import { DesignPopupComponent } from './components/shared/design-popup/design-popup.component';
import { ReactiveFormsModule } from '@angular/forms';

// import { ScrollingDirective } from './directives/scrolling.directive';
import { ImagePopupComponent } from './components/shared/image-popup/image-popup.component';

import { CookieService } from 'ngx-cookie-service';
import { NgUserManService } from 'ng-user-man';

@NgModule({
  declarations: [
    AppComponent,
    // ScrollingDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    ReactiveFormsModule,
    // HttpClientXsrfModule.withOptions({
    // cookieName: '_csrf',
    // headerName: 'x-xsrf-token',
    // }),
  ],
  providers: [
    // ValidateService,
    // UserService,
    RecaptchaModule,
    RecaptchaFormsModule,
    // CatalogService,
    // ProductService,
    // SharedService,
    // AuthGuard,
    // NoAuthGuard,
    CookieService,
    // { provide: SharedService, useClass: SharedService },
    {
      provide: 'config', useValue: config,
    },
  ],
  exports: [
  ],
  entryComponents: [
    ConfirmPopupComponent,
    DesignPopupComponent,
    ImagePopupComponent,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
