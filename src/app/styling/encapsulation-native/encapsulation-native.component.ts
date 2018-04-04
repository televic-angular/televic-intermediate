import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation-native',
  templateUrl: './encapsulation-native.component.html',
  styleUrls: ['./encapsulation-native.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class EncapsulationNativeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
