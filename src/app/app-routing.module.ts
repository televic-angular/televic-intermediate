import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes,
  PreloadAllModules,
} from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  // {
  //   path: 'styling',
  //   component: AppComponent
  // },
  {
    path: 'lifecycle-hooks',
    loadChildren: './lifecycle-hooks/lifecycle-hooks.module#LifecycleHooksModule'
  },
  {
    path: '',
    redirectTo: '/styling',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
