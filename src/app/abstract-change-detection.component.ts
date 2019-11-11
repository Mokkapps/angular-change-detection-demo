import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { getNewHeroAge, getNewHeroName } from './utils/utils';
import { Hero } from './models/hero';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';

export abstract class AbstractChangeDetectionComponent {
  hero: Hero;

  protected constructor(
    private el: ElementRef<any>,
    private zone: NgZone,
    public cd: ChangeDetectorRef,
    private http: HttpClient
  ) {}

  changeName(): void {
    this.hero.name = getNewHeroName();
  }

  changeAge(): void {
    this.hero.details.age = getNewHeroAge();
  }

  loadNameViaHttp() {
    this.http
      .get<{ name: string }>(`./assets/test-data/test-hero.json`)
      .subscribe(res => {
        this.hero.name = `${res.name}`;
      });
  }

  blink() {
    this.el.nativeElement.classList.add('highlight');
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.el.nativeElement.classList.remove('highlight');
      }, 1500);
    });
  }
}
