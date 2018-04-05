import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Profile } from '../change-detection.model';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.sass'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DefaultComponent implements OnInit {
  @Input() profile: Profile;
  constructor() {
    this.profile = new Profile('Rock', 'wang');
  }

  ngOnInit() {
  }

}
