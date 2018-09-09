import { put, call, take } from 'redux-saga/effects';
import * as actions from 'actions';
import { firebaseApp } from 'firebaseApp';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from 'constants/actionTypes';

export function* SignupSaga(action) {
  console.log('starting signup saga');
  try{
    const auth = firebaseApp.auth();
    const result = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      action.email,
      action.password,
    );
    console.log('result is: ', result);
    yield put({
      type: SIGNUP_SUCCESS,
      payload: result,
    })
  } catch (error) {
    const error_message = { code: error.code, message: error.message};
    yield put({
      type: SIGNUP_FAILURE,
      error: error_message,
    });
  }
}