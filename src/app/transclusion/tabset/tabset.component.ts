import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { Tab } from '../tab/tab.model';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.sass']
})
export class TabsetComponent implements AfterContentInit {

  // @ContentChild(Tab) tabs: QueryList<Tab>;  // get the content from dom
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;  // get the content from dom

  constructor() { }

  ngAfterContentInit() {
    this.tabs.toArray()[0].active = true;
  }

  setActive(tab: TabComponent) {
    this.tabs.toArray().forEach(t => t.active = false);
    tab.active = true;
  }

}
