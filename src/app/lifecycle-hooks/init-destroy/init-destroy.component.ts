import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-init-destroy',
  templateUrl: './init-destroy.component.html',
  styleUrls: ['./init-destroy.component.sass']
})
export class InitDestroyComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('on init');
  }

  ngOnDestroy() {
    console.log('on destroy');
  }

}
