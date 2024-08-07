/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import {
  NbPasswordAuthStrategy,
  NbAuthModule,
  NbAuthJWTToken,
  NbPasswordAuthStrategyOptions,
  getDeepFromObject,
} from '@nebular/auth';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthGuard } from './auth-guard.service';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbTimepickerModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { environment } from '../environments/environment';
import { CacheInterceptor } from './cache.interceptor';
import { NbRegisterCustomComponent } from "./pages/auth/register/register.component";
import { AuthCustomModule } from "./pages/auth/auth.module";
import { LoadingInterceptor } from './interceptors/loading/loading.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AuthCustomModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbTimepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: "AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY",
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: "email",
          baseEndpoint: environment.baseUrl,
          token: {
            class: NbAuthJWTToken,
            key: "token",
          },
          errors: {
            key: "error",
            getter: (module, res, options) => {
              return res.error
                ? res.error.message
                : options[module].defaultErrors;
            },
          },
          messages: {
            key: "message",
            getter: (module, res, options) => {
              return res.body.message
                ? res.body.message
                : options[module].defaultMessages;
            },
          },
          login: {
            endpoint: "/auth/sign-in",
            method: "post",
            requireValidToken: true,
            redirect: {
              success: "/pages/inicio/home",
              failure: null,
            },
          },
          register: {
            endpoint: "/auth/sign-up",
            method: "post",
            requireValidToken: true,
            redirect: {
              success: "/pages/inicio/home",
              failure: null,
            },
          },
          logout: {
            endpoint: "/auth/sign-out",
          },
          resetPass: {
            endpoint: `/auth/reset-password/?token=1`,
            method: "put",
            requireValidToken: true,
            resetPasswordTokenKey: "token",
            redirect: {
              failure: null,
            },
          },
          requestPass: {
            endpoint: "/auth/request-pass",
          },
        }),
      ],
      forms: {
        login: {
          strategy: "email",
          rememberMe: false,
          showMessages: {
            success: true,
            error: true,
          },
        },
        register: {
          terms: false,
        },
        requestPassword: {
          strategy: "email",
          showMessages: {
            success: true,
            error: true,
          },
        },
        resetPassword: {
          strategy: "email",
          showMessages: {
            success: true,
            error: true,
          },
        },
        logout: {
          strategy: "email",
        },
        validation: {
          password: {
            required: true,
            minLength: 4,
            maxLength: 50,
          },
          email: {
            required: true,
          },
          fullName: {
            required: false,
            minLength: 4,
            maxLength: 50,
          },
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CacheInterceptor,
    //   multi: true,
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoadingInterceptor,
    //   multi: true,
    // },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
})
export class AppModule {
}
