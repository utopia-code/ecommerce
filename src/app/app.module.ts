import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ArticleService } from './services/article.service';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';
import { ArticleAppInterceptor } from './services/article-app.interceptor';
import { AuthGuardService } from './guards/auth-guard.service';
import { ArticleNewDeactivateGuardService } from './guards/article-new-deactivate-guard.service';
import { ArticleLoadResolverService } from './guards/article-load-resolver.service';

import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import localeESExtra from '@angular/common/locales/extra/es';

registerLocaleData(localeES, 'es-ES', localeESExtra);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-ES'
    },
    ArticleService,
    UserService,
    UserStoreService,
    AuthGuardService,
    ArticleNewDeactivateGuardService,
    ArticleLoadResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ArticleAppInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
