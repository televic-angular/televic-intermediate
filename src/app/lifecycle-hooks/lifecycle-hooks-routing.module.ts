import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { InitDestroyComponent } from './init-destroy/init-destroy.component';

const lifecycleHooksRoutes: Routes = [{
  path: '',
  component: LifecycleHooksComponent,
  children: [
    {
    path: 'init-destroy',
    component: InitDestroyComponent
    }/* ,
    {
      path: '',
      component: InitDestroyComponent
    } */
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
