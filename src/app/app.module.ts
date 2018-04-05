import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StylingModule } from './styling/styling.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostsModule } from './hosts/hosts.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TransclusionModule } from './transclusion/transclusion.module';

import { OnPushComponent } from './change-detection/on-push/on-push.component';
import { DefaultComponent } from './change-detection/default/default.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ObservablesComponent } from './change-detection/observables/observables.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    StylingModule,
    HostsModule,
    TransclusionModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    OnPushComponent,
    DefaultComponent,
    ChangeDetectionComponent,
    ObservablesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
