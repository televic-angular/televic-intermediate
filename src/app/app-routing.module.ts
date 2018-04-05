import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes,
  PreloadAllModules,
} from '@angular/router';

import { AppComponent } from './app.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { OnPushComponent } from './change-detection/on-push/on-push.component';
import { DefaultComponent } from './change-detection/default/default.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'lifecycle-hooks',
    loadChildren: './lifecycle-hooks/lifecycle-hooks.module#LifecycleHooksModule'
  },
  {
    path: 'change-detection',
    component: ChangeDetectionComponent
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
