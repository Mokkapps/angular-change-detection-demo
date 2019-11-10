import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexDemoComponent } from './complex-demo.component';

describe('ComplexDemoComponent', () => {
  let component: ComplexDemoComponent;
  let fixture: ComponentFixture<ComplexDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
