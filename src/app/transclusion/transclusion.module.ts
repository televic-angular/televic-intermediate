import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransclusionComponent } from './transclusion.component';
import { TransclusionRoutingModule } from './transclusion-routing.module';
import { TabsetComponent } from './tabset/tabset.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  imports: [
    CommonModule,
    TransclusionRoutingModule
  ],
  declarations: [
    TransclusionComponent,
    TabsetComponent,
    TabComponent
  ]
})
export class TransclusionModule { }
