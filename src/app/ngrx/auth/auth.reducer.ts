import { createReducer, on } from '@ngrx/store';
import * as AuthAction from './auth.action';
import { AuthState } from './auth.state';
import { AuthModel } from '../../models/auth.model';
import { AuthModule } from '@angular/fire/auth';

export const initialState: AuthState = {
  idToken: '',
  isLoading: false,
  isSuccessful: false,
  errorMessage: '',
  uid: '',
  isLogoutSuccess: false,
  logoutErrorMessage: '',
  authDetail: <AuthModel>{},
  isGetSuccess: false,

  getAllAuth: [],
  isGetAllSuccess: false,
  getAllErrorMessage: '',
};

export const authReducer = createReducer(
  initialState,
  on(AuthAction.login, (state, action) => {
    return {
      ...state,
      isLoading: true,
      isSuccessful: false,
      errorMessage: '',
    };
  }),
  on(AuthAction.loginSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      isSuccessful: true,
      errorMessage: '',
    };
  }),
  on(AuthAction.loginFailure, (state, { errorMessage, type }) => {
    return {
      ...state,
      isLoading: false,
      isSuccessful: false,
      errorMessage,
    };
  }),
  on(AuthAction.logout, (state, action) => {
    return {
      ...state,
      isLogoutSuccess: false,
      logoutErrorMessage: '',
    };
  }),
  on(AuthAction.logoutSuccess, (state, action) => {
    console.log(action);
    return {
      ...state,
      isLogoutSuccess: true,
      isSuccessful: false,
      idToken: '',
      uid: '',
    };
  }),
  on(AuthAction.logoutFailure, (state, { errorMessage, type }) => {
    return {
      ...state,
      isLogoutSuccess: false,
      logoutErrorMessage: errorMessage,
    };
  }),
  on(AuthAction.storedIdToken, (state, { idToken, type }) => {
    return {
      ...state,
      idToken,
    };
  }),
  on(AuthAction.storedUserUid, (state, action) => {
    return {
      ...state,
      uid: action.uid,
    };
  }),
  on(AuthAction.getAuthById, (state, action) => {
    return {
      ...state,
      isSuccess: false,
      error: '',
      auth: <AuthModel>{},
    };
  }),
  on(AuthAction.getAuthByIdSuccess, (state, action) => {
    return {
      ...state,
      isSuccess: true,
      authDetail: action.auth,
    };
  }),
  on(AuthAction.getAuthByIdFailure, (state, { errorMessage, type }) => {
    return {
      ...state,
      errorMessage,
    };
  }),

  on(AuthAction.getAllAuth, (state, action) => {
    return {
      ...state,
    };
  }),
  on(AuthAction.getAllAuthSuccess, (state, action) => {
    return {
      ...state,
      isGetAllSuccess: true,
      getAllAuth: action.auth,
    };
  }),
  on(AuthAction.getAllAuthFailure, (state, { errorMessage, type }) => {
    return {
      ...state,
      getAllErrorMessage: errorMessage,
    };
  }),
);
