// auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {AuthApiService} from '../web-apis/auth.api.service';
import {AuthActions} from "../actions/auth.actions";


@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private authApiService: AuthApiService) {

  }
  login$ = createEffect(() => {
    console.log('login effect')
      return this.actions$.pipe(
        ofType('[Auth] Login'),
        switchMap((action) => {
          console.log('login effect switchMap')
            return this.authApiService.sendRequest(action).pipe(
              map((response) => {
                console.log('login effect switchMap map')
                console.log(response)
                return AuthActions.loginSuccess({response});
              }),
              catchError((error) => {
                console.log('login effect switchMap catchError')
                return of(AuthActions.loginFailure({error}));
              })
            );
          }
        )
      );
    }
  );

}
