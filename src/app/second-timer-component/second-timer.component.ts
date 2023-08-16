import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TimerService} from "../timer-component/timer-service/timer.service";

@Component({
  selector: 'second-timer',
  templateUrl: './second-timer.component.html',
  styleUrls: ['./second-timer.component.css']
})
export class SecondTimerComponent {

  constructor(private timerService: TimerService,
              private router: Router) {
  }

  logout() {
    this.timerService.ngOnDestroy()
    this.router.navigateByUrl('/timer')
  }

}
