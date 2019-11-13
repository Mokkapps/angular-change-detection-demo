import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit
} from '@angular/core';
import { Hero } from '../models/hero';
import { createHero } from '../utils/utils';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-simple-demo',
  templateUrl: './simple-demo.component.html',
  styleUrls: ['./simple-demo.component.scss']
})
export class SimpleDemoComponent implements OnInit {
  heroes: Hero[] = [];
  time: Date;
  timeSubscription?: Subscription;

  constructor(private ref: ApplicationRef, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.heroes.push(createHero());
  }

  addHero(): void {
    this.heroes.push(createHero());
  }

  createNewHero(id: string): void {
    const index = this.heroes.findIndex(h => h.id === id);
    const newHeroes = [...this.heroes];
    newHeroes[index] = createHero();
    this.heroes = newHeroes;
  }

  triggerSetTimeout() {
    setTimeout(() => {});
  }

  triggerTick() {
    this.ref.tick();
  }

  triggerMarkForCheck() {
    this.cd.markForCheck();
  }

  triggerObservableTime(): void {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
      this.timeSubscription = undefined;
      return;
    }

    this.timeSubscription = interval(1000)
      .pipe(map(i => new Date()))
      .subscribe(time => {
        this.time = time;
      });
  }
}
