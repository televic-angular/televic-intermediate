import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StylingComponent } from './styling.component';
import { InlineComponent } from './inline/inline.component';
import { ExternalComponent } from './external/external.component';
import { EncapsulationNoneComponent } from './encapsulation-none/encapsulation-none.component';
import { EncapsulationNativeComponent } from './encapsulation-native/encapsulation-native.component';

const stylingRoutes: Routes = [
  {
    path: 'styling',
    component: StylingComponent,
    children: [
      {
        path: 'inline',
        component: InlineComponent
      },
      {
        path: 'external',
        component: ExternalComponent
      },
      /* {
        path: 'encapsulation-emulated',
        component:
      }, */
      {
        path: 'encapsulation-none',
        component: EncapsulationNoneComponent
      },
      {
        path: 'encapsulation-native',
        component: EncapsulationNativeComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(stylingRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class StylingRoutingModule { }
