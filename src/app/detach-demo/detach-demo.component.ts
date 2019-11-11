import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Hero } from '../models/hero';
import { createHero } from '../utils/utils';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detach-demo',
  templateUrl: './detach-demo.component.html',
  styleUrls: ['./detach-demo.component.scss']
})
export class DetachDemoComponent implements OnDestroy, OnInit {
  hero: Hero = createHero();
  private subscription?: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.subscription = interval(1000)
      .pipe(map(() => {}))
      .subscribe(v => {
        this.hero = createHero();
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
