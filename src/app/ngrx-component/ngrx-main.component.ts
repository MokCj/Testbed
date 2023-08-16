import {Component, OnInit} from "@angular/core";
import {AuthApiService} from "./web-apis/auth.api.service";
import {AuthRequest} from "./model/auth.model";
import { Store } from "@ngrx/store";
import {AuthActions} from "./actions/auth.actions";

@Component({
  selector: 'ngrx-main',
  templateUrl: './ngrx-main.component.html',
  styleUrls: ['./ngrx-main.component.css']
})
export class NgrxMainComponent implements OnInit {

  constructor(private authApiService: AuthApiService,
              private store: Store) {
  }

  ngOnInit() {
    let mRequest = new AuthRequest('mUsername', 'mPassword')
    console.log('Start login')
    this.authApiService.sendRequest(mRequest).subscribe((response) => {
      console.log(response)
    })
    this.store.dispatch(AuthActions.login({...mRequest}))
  }

}
