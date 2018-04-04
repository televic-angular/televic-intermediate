import { Component, OnInit, Input } from '@angular/core';

import { Tab } from './tab.model';

@Component({
  selector: 'app-tab',
  template: `
    <div [class.active]="active">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tab.component.sass']
})
export class TabComponent {

  @Input() title: string;

  active = false;
  name: string;

  constructor() { }

}
