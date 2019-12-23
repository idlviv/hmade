import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { config } from './app.config';
import { ConfirmPopupComponent } from './components/shared/confirm-popup/confirm-popup.component';
import { DesignPopupComponent } from './components/shared/design-popup/design-popup.component';
import { ReactiveFormsModule } from '@angular/forms';

// import { ScrollingDirective } from './directives/scrolling.directive';
import { ImagePopupComponent } from './components/shared/image-popup/image-popup.component';

import { CookieService } from 'ngx-cookie-service';
import { AgmCoreModule } from '@agm/core';

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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJGNCJrp_eBY-QuVo4z6wB5aQ9IYPM004'
    })
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
