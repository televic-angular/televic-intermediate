import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HostsComponent } from './hosts.component';
import { HostsRoutingModule } from './hosts-routing.module';
import { HostsDirective } from './hosts.directive';
import { ExportAsDirective } from './export-as.directive';

@NgModule({
  imports: [
    HostsRoutingModule
  ],
  declarations: [
    HostsComponent,
    HostsDirective,
    ExportAsDirective
  ]
})
export class HostsModule { }
