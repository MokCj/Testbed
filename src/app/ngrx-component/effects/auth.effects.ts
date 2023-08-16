// auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {AuthApiService} from '../web-apis/auth.api.service';


@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private authApiService: AuthApiService) {

  }
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Auth] Login'),
      switchMap((action) =>
        this.authApiService.sendRequest(action).pipe(
          map((response) => ({ type: '[Auth] Login Success', response })),
          catchError((error) => of({ type: '[Auth] Login Failure', error }))
        )
      )
    )
  );

}
