import {Component} from "@angular/core";
import {TimerService} from "./timer-service/timer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {

  constructor(private timerService: TimerService,
              private router: Router) {
  }

  startTimer() {
    this.timerService.startTokenRefresh();
  }

  redirectToSecond() {
    this.router.navigateByUrl('/second-timer')
  }
}
