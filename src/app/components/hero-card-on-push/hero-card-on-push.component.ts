import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone
} from '@angular/core';
import { AbstractChangeDetectionComponent } from '../../abstract-change-detection.component';
import { Hero } from '../../models/hero';
import { HttpClient } from '@angular/common/http';
import { getHeroCardTemplate } from '../hero-card-template';

@Component({
  selector: 'app-hero-card-on-push',
  templateUrl: getHeroCardTemplate('HeroCardOnPushComponent'),
  styleUrls: ['./hero-card-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroCardOnPushComponent extends AbstractChangeDetectionComponent {
  @Input() hero: Hero;

  constructor(
    el: ElementRef<any>,
    zone: NgZone,
    cd: ChangeDetectorRef,
    http: HttpClient
  ) {
    super(el, zone, cd, http);
  }
}
