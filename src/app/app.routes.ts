import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SimpleDemoComponent } from './simple-demo/simple-demo.component';
import { ComplexDemoComponent } from './complex-demo/complex-demo.component';
import { DetachDemoComponent } from './detach-demo/detach-demo.component';
import { ExpressionChangedAfterItHasBeenCheckedErrorDemoComponent } from './expression-changed-after-it-has-been-checked-error-demo/expression-changed-after-it-has-been-checked-error-demo.component';
import {AsyncPipeDemoComponent} from './async-pipe-demo/async-pipe-demo.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'simple-demo',
    component: SimpleDemoComponent
  },
  {
    path: 'complex-demo',
    component: ComplexDemoComponent
  },
  {
    path: 'detach-demo',
    component: DetachDemoComponent
  },
  {
    path: 'async-pipe-demo',
    component: AsyncPipeDemoComponent
  },
  {
    path: 'expression-changed-demo',
    component: ExpressionChangedAfterItHasBeenCheckedErrorDemoComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
