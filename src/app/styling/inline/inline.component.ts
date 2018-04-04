import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styles: [`
    .red {
      color: red
    }
  `]
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
