import {Injectable, OnDestroy} from "@angular/core";
import {interval, Subject, takeUntil} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimerService implements OnDestroy {
  private destroy$ = new Subject<void>()
  private tokenRefreshInterval = 10000
  private nextInvokeTime: Date | null = null
  private timerId = 0
  private started = false;

  constructor() {
  }

  startTokenRefresh() {
    if(this.started) {
      return
    }
    this.callRefreshTokenAPI();

    interval(this.tokenRefreshInterval)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if(this.nextInvokeTime && new Date >= this.nextInvokeTime) {
          this.callRefreshTokenAPI();
        }
      })
    this.started = true
  }

  callRefreshTokenAPI() {
    const currentTime = new Date();
    const nextInvokeTime = new Date(currentTime.getTime() + 2 * 60000); // Add 2 minutes
    this.nextInvokeTime = new Date(nextInvokeTime.getTime() - 10000); // Set 10 seconds before the next invoke time
    this.timerId += 1;
    console.log('Refresh Token API Called: ' + this.timerId);
    console.log('Next Invoke Time: ' + this.nextInvokeTime);
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
