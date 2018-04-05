import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observables',
  template: `
    <div>
      <div>Total items: {{counter}}</div>
    </div>
  `,
  styleUrls: ['./observables.component.sass'],
  // only adapt when inputs changed
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservablesComponent implements OnInit {
  @Input() items: Observable<number>;

  counter = 0;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.items.subscribe((v) => {
      console.log('got value', v);
      this.counter++;
      if (this.counter % 5 === 0) {
        this.changeDetector.markForCheck();
      }
    },
      null,
      () => {
        this.changeDetector.markForCheck();
      });
  }

}
