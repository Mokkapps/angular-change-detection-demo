import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  OnInit
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractChangeDetectionComponent } from '../../abstract-change-detection.component';
import { interval, Observable, Subscription } from 'rxjs';
import { Hero } from '../../models/hero';
import { map, startWith } from 'rxjs/operators';
import { createHero } from '../../utils/utils';

@Component({
  selector: 'app-hero-card-async-pipe',
  templateUrl: './hero-card-async-pipe.component.html',
  styleUrls: ['./hero-card-async-pipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroCardAsyncPipeComponent extends AbstractChangeDetectionComponent
  implements OnInit, OnDestroy {
  @Input() useAsyncPipe: boolean;
  hero$: Observable<Hero>;
  hero: Hero = createHero();
  private subscription?: Subscription;

  constructor(
    el: ElementRef<any>,
    zone: NgZone,
    cd: ChangeDetectorRef,
    http: HttpClient
  ) {
    super(el, zone, cd, http);
  }

  ngOnInit(): void {
    if (this.useAsyncPipe) {
      this.hero$ = interval(1000).pipe(
        startWith(createHero()),
        map(() => createHero())
      );
    } else {
      this.subscription = interval(1000)
        .pipe(map(() => createHero()))
        .subscribe(() => {
          this.hero = createHero();
          console.log(
            'HeroCardAsyncPipeComponent new hero without AsyncPipe: ',
            this.hero
          );
        });
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
