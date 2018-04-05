import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Profile } from './change-detection.model';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.sass']
})
export class ChangeDetectionComponent implements OnInit, OnDestroy {

  profile1: Profile = new Profile('Felipe', 'Coury');
  profile2: Profile = new Profile('Nate', 'Murray');

  timer: any;
  itemsSubject: Subject<number> = new Subject();

  constructor() {
    let i = 0;
    this.timer = setInterval((n) => {
      this.itemsSubject.next(i += n);
      if (i > 500) {
        clearInterval(this.timer);
      }
    }, 100, 10);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

}
