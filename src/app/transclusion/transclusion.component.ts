import { Component, OnInit } from '@angular/core';

import { Tab } from './tab/tab.model';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-transclusion',
  templateUrl: './transclusion.component.html',
  styleUrls: ['./transclusion.component.sass']
})
export class TransclusionComponent implements OnInit {

  tabs: any;
  // tabs: Array<TabComponent>;

  constructor() {

/*     this.tabs = [
      new Tab('About', 'This is the About tab'),
      new Tab('Blog', 'This is our blog'),
      new Tab('Contact us', 'Contact us here'),
    ]; */

    this.tabs = [
      { title: 'About', content: 'This is the About tab' },
      { title: 'Blog', content: 'This is our blog' },
      { title: 'Contact us', content: 'Contact us here' },
    ];
  }

  ngOnInit() {
  }

}
