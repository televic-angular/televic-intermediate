import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { TransclusionComponent } from './transclusion.component';

const transclusionRouting: Routes = [{
  path: 'transclusion',
  component: TransclusionComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(transclusionRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class TransclusionRoutingModule { }
