import { put, call, take } from 'redux-saga/effects';
import * as actions from 'actions';
import { firebaseApp } from 'firebaseApp';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from 'constants/actionTypes';

export function* LoginSaga(action) {
  console.log("startung log in saga");
  try{
    const auth = firebaseApp.auth();
    const response = yield call(
      [auth, auth.signInWithEmailAndPassword],
      action.email,
      action.password,
    );
    console.log('resposnse is: ', response);
    yield put({
      type: LOGIN_SUCCESS,
      payload: response,
      auth:true,
    })
  } catch (error) {
    const error_message = { code: error.code, message: error.message};
    yield put({
      type: LOGIN_FAILURE,
      error: error_message,
      auth:false,
    });
  }
}
