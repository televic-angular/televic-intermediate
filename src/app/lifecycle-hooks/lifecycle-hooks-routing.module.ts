import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { InitDestroyComponent } from './init-destroy/init-destroy.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { AllInComponent } from './all-in/all-in.component';

const lifecycleHooksRoutes: Routes = [{
  path: '',
  component: LifecycleHooksComponent,
  children: [
    {
    path: 'init-destroy',
    component: InitDestroyComponent
    }, /*
    {
      path: '',
      component: InitDestroyComponent
    } */
    {
      path: 'do-check',
      component: DoCheckComponent
    },
    {
      path: 'all-in',
      component: AllInComponent
    }
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(lifecycleHooksRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LifecycleHooksRoutingModule { }
