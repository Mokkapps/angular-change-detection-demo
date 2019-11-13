import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { MatButton } from '@angular/material';

@Component({
  selector: 'app-run-outside-angular-trigger',
  templateUrl: './run-outside-angular-trigger.component.html',
  styleUrls: ['./run-outside-angular-trigger.component.scss']
})
export class RunOutsideAngularTriggerComponent
  implements AfterViewInit, OnDestroy {
  @ViewChild('outsideZoneButton', { static: true }) myButton: MatButton;
  private subscription?: Subscription;

  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone) {
    this.cd.detach();
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.subscription = fromEvent(
        this.myButton._elementRef.nativeElement,
        'click'
      ).subscribe(e => {
        console.log('setTimeout did not trigger change detection!');
      });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
