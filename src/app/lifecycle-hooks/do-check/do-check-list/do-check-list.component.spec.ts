import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckListComponent } from './do-check-list.component';

describe('DoCheckListComponent', () => {
  let component: DoCheckListComponent;
  let fixture: ComponentFixture<DoCheckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoCheckListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
