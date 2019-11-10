import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone
} from '@angular/core';
import { Hero } from '../../models/hero';
import { HttpClient } from '@angular/common/http';
import { AbstractChangeDetectionComponent } from '../../abstract-change-detection.component';
import { getHeroCardTemplate } from '../hero-card-template';

@Component({
  selector: 'app-hero-card',
  templateUrl: getHeroCardTemplate(),
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent extends AbstractChangeDetectionComponent {
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
