import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationNativeComponent } from './encapsulation-native.component';

describe('EncapsulationNativeComponent', () => {
  let component: EncapsulationNativeComponent;
  let fixture: ComponentFixture<EncapsulationNativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncapsulationNativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncapsulationNativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
