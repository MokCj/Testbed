// auth.actions.ts
import { createAction, props } from '@ngrx/store'
import {AuthRequest, AuthResponse} from '../model/auth.model'
// Create AuthRequest and AuthResponse models to represent request and response

export class AuthActions {
  static reset = createAction('[Auth] Reset');
  static login = createAction('[Auth] Login', props<AuthRequest>());
  static loginSuccess = createAction('[Auth] Login Success', props<{ response: AuthResponse }>());
  static loginFailure = createAction('[Auth] Login Failure', props<{ error: any }>());
}
