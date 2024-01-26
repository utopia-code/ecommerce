import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleItemComponent } from './articles/article-item/article-item.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ArticleNewReactiveComponent } from './articles/article-new-reactive/article-new-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DefectImgPipe } from './pipes/defect-img.pipe';

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
    ArticleItemComponent,
    ArticleListComponent,
    NavbarComponent,
    ArticleNewReactiveComponent,
    DefectImgPipe,
    LoginComponent,
    RegisterComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
