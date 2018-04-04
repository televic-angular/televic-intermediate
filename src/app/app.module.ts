import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { StylingModule } from './styling/styling.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostsModule } from './hosts/hosts.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TransclusionModule } from './transclusion/transclusion.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    StylingModule,
    HostsModule,
    TransclusionModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
