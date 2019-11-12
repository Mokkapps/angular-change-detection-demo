import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunOutsideAngularDemoComponent } from './run-outside-angular-demo.component';

describe('RunOutsideAngularDemoComponent', () => {
  let component: RunOutsideAngularDemoComponent;
  let fixture: ComponentFixture<RunOutsideAngularDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunOutsideAngularDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunOutsideAngularDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
