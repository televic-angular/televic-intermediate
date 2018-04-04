import { Component, OnInit, OnChanges, SimpleChange, Input } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.sass']
})
export class OnChangesComponent implements OnInit, OnChanges {

  @Input() name: string;
  @Input() comment: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
    console.log('on change', changes);
  }

}
