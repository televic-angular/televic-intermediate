import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Profile } from '../change-detection.model';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.sass'],
  // only adapt when inputs changed
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {
  @Input() profile: Profile;

  constructor() {
    this.profile = new Profile('Rock', 'wang');
  }

  ngOnInit() {
  }

}
