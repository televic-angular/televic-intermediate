import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation-none',
  templateUrl: './encapsulation-none.component.html',
  styleUrls: ['./encapsulation-none.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class EncapsulationNoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
