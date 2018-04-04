import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HostsComponent } from './hosts.component';

const hostsRouting: Routes = [{
  path: 'hosts',
  component: HostsComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(hostsRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class HostsRoutingModule { }
