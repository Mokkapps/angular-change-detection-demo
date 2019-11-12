import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeDemoComponent } from './async-pipe-demo.component';

describe('AsyncPipeDemoComponent', () => {
  let component: AsyncPipeDemoComponent;
  let fixture: ComponentFixture<AsyncPipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncPipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
