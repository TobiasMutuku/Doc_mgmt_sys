// import { NgModule } from "@angular/core";
// import { CoreModule } from "./admin/core/core.module";
// import { SharedModule } from "./admin/shared/shared.module";
// import { BrowserModule } from "@angular/platform-browser";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { AppRoutingModule } from "./app-routing.module";
// import { AppComponent } from "./app.component";
// import { HeaderComponent } from "./admin/layout/header/header.component";
// import { PageLoaderComponent } from "./admin/layout/page-loader/page-loader.component";
// import { SidebarComponent } from "./admin/layout/sidebar/sidebar.component";
// import { RightSidebarComponent } from "./admin/layout/right-sidebar/right-sidebar.component";
// import { AuthLayoutComponent } from "./admin/layout/app-layout/auth-layout/auth-layout.component";
// import { MainLayoutComponent } from "./admin/layout/app-layout/main-layout/main-layout.component";
// import { fakeBackendProvider } from "./admin/core/interceptor/fake-backend";
// import { ErrorInterceptor } from "./admin/core/interceptor/error.interceptor";
// import { JwtInterceptor } from "./admin/core/interceptor/jwt.interceptor";
// import { LocationStrategy, HashLocationStrategy } from "@angular/common";
// import { FormsModule } from '@angular/forms';

// import {
//   PerfectScrollbarModule,
//   PERFECT_SCROLLBAR_CONFIG,
//   PerfectScrollbarConfigInterface,
// } from "ngx-perfect-scrollbar";
// import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
// import { TranslateHttpLoader } from "@ngx-translate/http-loader";
// import { ClickOutsideModule } from "ng-click-outside";
// import {
//   HttpClientModule,
//   HTTP_INTERCEPTORS,
//   HttpClient,
// } from "@angular/common/http";

// import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
// import { environment } from "src/environments/environment.prod";
// import { AuthComponent } from './admin/layout/auth/auth.component';


// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//   suppressScrollX: true,
//   wheelPropagation: false,
// };

// if (environment.production) {
//   // // disable all console output in production mode
//   // console.log = function() {};
//   // console.warn = function() {};
//   // console.error = function() {};
// }

// export function createTranslateLoader(http: HttpClient): any {
//   return new TranslateHttpLoader(http, "assets/i18n/", ".json");
// }

// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     PageLoaderComponent,
//     SidebarComponent,
//     RightSidebarComponent,
//     AuthLayoutComponent,
//     MainLayoutComponent,
//     AuthComponent,
    
//   ],
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     AppRoutingModule,
//     HttpClientModule,
//     FormsModule,
//     PerfectScrollbarModule,
//     ClickOutsideModule,
//     TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: createTranslateLoader,
//         deps: [HttpClient],
//       },
//     }),
//     LoadingBarRouterModule,
//     // core & shared
//     CoreModule,
//     SharedModule,
//   ],
//   providers: [
//     { provide: LocationStrategy, useClass: HashLocationStrategy },
//     {
//       provide: PERFECT_SCROLLBAR_CONFIG,
//       useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
//     },
//     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
//     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

//     fakeBackendProvider,

//     //AutoLogoutService
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppModule { }
