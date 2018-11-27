import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmachineComponent } from './editmachine.component';

describe('EditmachineComponent', () => {
  let component: EditmachineComponent;
  let fixture: ComponentFixture<EditmachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
