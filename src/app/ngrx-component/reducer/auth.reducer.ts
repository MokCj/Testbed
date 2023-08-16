// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';
import {AuthResponse} from "../model/auth.model";

export interface AuthState {
  loading: boolean;
  response: AuthResponse; // Modify to use AuthResponse type if available
  error: any;
}

const initialState: AuthState = {
  loading: false,
  response: new AuthResponse(-1, '', ''),
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, loading: true })),
  on(AuthActions.loginSuccess, (state, { response }) => ({ ...state, loading: false, response })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
