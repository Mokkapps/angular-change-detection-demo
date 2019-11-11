import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionChangedAfterItHasBeenCheckedErrorDemoComponent } from './expression-changed-after-it-has-been-checked-error-demo.component';

describe('ExpressionChangedAfterItHasBeenCheckedErrorDemoComponent', () => {
  let component: ExpressionChangedAfterItHasBeenCheckedErrorDemoComponent;
  let fixture: ComponentFixture<ExpressionChangedAfterItHasBeenCheckedErrorDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressionChangedAfterItHasBeenCheckedErrorDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionChangedAfterItHasBeenCheckedErrorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
