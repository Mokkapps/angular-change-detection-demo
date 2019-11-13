import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { SimpleDemoComponent } from './simple-demo/simple-demo.component';
import { HomeComponent } from './home/home.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroCardOnPushComponent } from './components/hero-card-on-push/hero-card-on-push.component';
import { ComplexDemoComponent } from './complex-demo/complex-demo.component';
import { DetachDemoComponent } from './detach-demo/detach-demo.component';
import { APP_ROUTES } from './app.routes';
import { ExpressionChangedAfterItHasBeenCheckedErrorDemoComponent } from './expression-changed-after-it-has-been-checked-error-demo/expression-changed-after-it-has-been-checked-error-demo.component';
import { AsyncPipeDemoComponent } from './async-pipe-demo/async-pipe-demo.component';
import { HeroCardAsyncPipeComponent } from './components/hero-card-async-pipe/hero-card-async-pipe.component';
import { RunOutsideAngularTriggerComponent } from './components/run-outside-angular-trigger/run-outside-angular-trigger.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDemoComponent,
    HomeComponent,
    HeroCardComponent,
    HeroDetailsComponent,
    HeroCardOnPushComponent,
    ComplexDemoComponent,
    DetachDemoComponent,
    ExpressionChangedAfterItHasBeenCheckedErrorDemoComponent,
    AsyncPipeDemoComponent,
    HeroCardAsyncPipeComponent,
    RunOutsideAngularTriggerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
