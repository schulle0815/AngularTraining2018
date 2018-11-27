import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicenumComponent } from './devicenum.component';

describe('DevicenumComponent', () => {
  let component: DevicenumComponent;
  let fixture: ComponentFixture<DevicenumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicenumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicenumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
