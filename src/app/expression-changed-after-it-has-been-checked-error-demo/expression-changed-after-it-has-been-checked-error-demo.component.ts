import { AfterViewInit, Component } from '@angular/core';
import { Hero } from '../models/hero';
import { createHero } from '../utils/utils';

@Component({
  selector: 'app-expression-changed-after-it-has-been-checked-error-demo',
  templateUrl:
    './expression-changed-after-it-has-been-checked-error-demo.component.html',
  styleUrls: [
    './expression-changed-after-it-has-been-checked-error-demo.component.scss'
  ]
})
export class ExpressionChangedAfterItHasBeenCheckedErrorDemoComponent
  implements AfterViewInit {
  hero: Hero = createHero();

  constructor() {}

  ngAfterViewInit(): void {
    this.hero.name = 'Another name which triggers ExpressionChangedAfterItHasBeenCheckedError';
  }
}
