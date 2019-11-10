import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDemoComponent } from './simple-demo.component';

describe('SimpleDemoComponent', () => {
  let component: SimpleDemoComponent;
  let fixture: ComponentFixture<SimpleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
