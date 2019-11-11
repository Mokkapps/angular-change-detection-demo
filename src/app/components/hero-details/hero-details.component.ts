import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone
} from '@angular/core';
import { Hero } from '../../models/hero';
import { AbstractChangeDetectionComponent } from '../../abstract-change-detection.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent extends AbstractChangeDetectionComponent {
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
