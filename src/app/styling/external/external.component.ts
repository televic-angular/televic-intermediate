import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.sass']

  // let externalCSSUrl: string = require('file-loader!./external.component.css');
  // webpack gives a URL
})
export class ExternalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
