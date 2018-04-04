import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.sass']
})
export class LifecycleHooksComponent implements OnInit {

  private showOnChange = false;
  private name = 'Rock wang';
  private comment: string;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.showOnChange = !this.showOnChange;
  }

  setValues(namefld, commentfld) {
    this.name = namefld.value;
    this.comment = commentfld.value;

  }

}
