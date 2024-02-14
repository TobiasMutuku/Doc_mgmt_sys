// import { NgModule } from "@angular/core";
// import { Routes, RouterModule } from "@angular/router";
// // import { AuthGuard } from "./admin/core/guard/auth.guard";
// // import { Role } from "./admin/core/models/role";
// // import { AuthLayoutComponent } from "./admin/layout/app-layout/auth-layout/auth-layout.component";
// // import { MainLayoutComponent } from "./admin/layout/app-layout/main-layout/main-layout.component";
// // import { Page404Component } from "./admin/authentication/page404/page404.component";
// const routes: Routes = [
//   {
//     path: "",
//     component: MainLayoutComponent,
//     canActivate: [AuthGuard],
//     children: [
//       { path: "", redirectTo: "/supplier-authentication/signin", pathMatch: "full" },
      
//       // {
//       //   path: "user",
//       //   loadChildren: () =>
//       //     import("./user/user.module").then((m) => m.UserModule),
//       // },
//       // {
//       //   path: "account",
//       //   loadChildren: () => import("./admin/account/account.module").then(m => m.AccountModule)
//       // },
      
      

//       // {
//       //   path: "dashboard",
//       //   loadChildren: () => import("./admin/dashboard/dashboard.module").then(m => m.DashboardModule)
//       // },

            
//     ],
//   },

//   // {
//   //   path: "supplier-authentication",
//   //   component: AuthLayoutComponent,
//   //   loadChildren: () =>
//   //     import("./authentication/authentication.module").then(
//   //       (m) => m.AuthenticationModule
//   //     ),
//   // },

//   { path: "**", component: Page404Component },
// ];
// @NgModule({
//   imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
//   exports: [RouterModule],
// })
// export class AppRoutingModule { }
