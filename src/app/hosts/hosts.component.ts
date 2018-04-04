import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.sass']
})
export class HostsComponent implements OnInit {
  @HostBinding('class.host-wrapper') hostClass = true;
  @ViewChild('hostsWrapperHolder') childHolder: ElementRef;

  constructor() {
    console.log(this.childHolder);
  }

  ngOnInit() {
  }

}
