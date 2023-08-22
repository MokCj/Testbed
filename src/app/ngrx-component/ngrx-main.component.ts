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
    this.store.subscribe((state) => {
      console.log('store subscribe')
      console.log('store subscribe state', state)
    })
  }

  loginDispatch() {
    let mRequest = new AuthRequest('mUsername', 'mPassword')
    console.log('Login via dispatch')
    this.store.dispatch(AuthActions.login({...mRequest}))
  }

  loginAuto() {
    let mRequest = new AuthRequest('mUsername', 'mPassword')
    console.log('Login via auto')
    this.authApiService.sendRequest(mRequest).subscribe((response) => {
      console.log('Login completed')
      console.log(response)
    })
  }

}
