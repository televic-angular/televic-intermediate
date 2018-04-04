import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { LifecycleHooksRoutingModule } from './lifecycle-hooks-routing.module';
import { InitDestroyComponent } from './init-destroy/init-destroy.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { OnChangesComponent } from './on-changes/on-changes.component';

@NgModule({
  imports: [
    CommonModule,
    LifecycleHooksRoutingModule
  ],
  declarations: [
    LifecycleHooksComponent,
    InitDestroyComponent,
    DoCheckComponent,
    OnChangesComponent
  ]
})
export class LifecycleHooksModule { }
