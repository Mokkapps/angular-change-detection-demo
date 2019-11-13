import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunOutsideAngularTriggerComponent } from './run-outside-angular-trigger.component';

describe('RunOutsideAngularTriggerComponent', () => {
  let component: RunOutsideAngularTriggerComponent;
  let fixture: ComponentFixture<RunOutsideAngularTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunOutsideAngularTriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunOutsideAngularTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
