import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StylingComponent } from './styling.component';
import { StylingRoutingModule } from './styling-routing.module';
import { InlineComponent } from './inline/inline.component';
import { ExternalComponent } from './external/external.component';
import { EncapsulationNativeComponent } from './encapsulation-native/encapsulation-native.component';
import { EncapsulationNoneComponent } from './encapsulation-none/encapsulation-none.component';

@NgModule({
  imports: [
    CommonModule,
    StylingRoutingModule
  ],
  declarations: [
    StylingComponent,
    InlineComponent,
    ExternalComponent,
    EncapsulationNativeComponent,
    EncapsulationNoneComponent
  ]
})
export class StylingModule { }
