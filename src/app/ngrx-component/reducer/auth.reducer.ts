// auth.reducer.ts
import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
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

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthResponse = createSelector(
  selectAuthState,
  (state: AuthState) => state.response
);

export const authReducer = createReducer(
  initialState,
  on(AuthActions.reset, (state) => {
    console.log('reset reducer')
    console.log('reset reducer state', state)
    return ({...state, loading: false, response: new AuthResponse(-1, '', ''), error: null});
  }),
  on(AuthActions.login, (state) => {
    console.log('login reducer')
    console.log('login reducer state', state)
    return ({...state, loading: true});
  }),
  on(AuthActions.loginSuccess, (state, { response }) => {
    console.log('loginSuccess reducer')
    console.log('loginSuccess reducer state', state)
    console.log('loginSuccess reducer response', response)
    return ({...state, loading: false, response});
  }),
  on(AuthActions.loginFailure, (state, { error }) => {
    console.log('loginFailure reducer')
    console.log('loginFailure reducer state', state)
    console.log('loginFailure reducer error', error)
    return ({...state, loading: false, error});
  })
);
