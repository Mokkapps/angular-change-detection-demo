import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCardOnPushComponent } from './hero-card-on-push.component';

describe('HeroCardOnPushComponent', () => {
  let component: HeroCardOnPushComponent;
  let fixture: ComponentFixture<HeroCardOnPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroCardOnPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCardOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
