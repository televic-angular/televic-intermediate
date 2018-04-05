import { Component, OnInit, Input, Output, EventEmitter, KeyValueDiffers, DoCheck } from '@angular/core';

@Component({
  selector: 'app-do-check-item',
  templateUrl: './do-check-item.component.html',
  styleUrls: ['./do-check-item.component.sass']
})
export class DoCheckItemComponent implements OnInit, DoCheck {

  @Input() comment: any = {
    likes: 0
  }; // must have default object
  @Output() toRemove: EventEmitter<any> = new EventEmitter();

  differ: any;

  constructor(differs: KeyValueDiffers) {
    this.differ = differs.find({}).create();
  }

  ngOnInit() {}

  ngDoCheck() {
    const changes = this.differ.diff(this.comment);
    if (changes) {
      changes.forEachAddedItem(r => this.logChange('added', r));
      changes.forEachRemovedItem(r => this.logChange('removed', r));
      changes.forEachChangedItem(r => this.logChange('changed', r));
    }
  }

  logChange(action, r) {
    if (action === 'changed') {
      console.log(r.key, action, 'from', r.previousValue, 'to', r.currentValue);
    }
    if (action === 'added') {
      console.log(action, r.key, 'with', r.currentValue);
    }
    if (action === 'removed') {
      console.log(action, r.key, '(was ' + r.previousValue + ')');
    }
  }

  remove(): void {
    this.toRemove.emit(this.comment);
  }

  clear(): void {
    delete this.comment.comment;
  }

  like(): void {
    this.comment.likes += 1;
  }
}
