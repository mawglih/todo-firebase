import { takeEvery, all } from 'redux-saga/effects';
import { LoginSaga } from './auth';
import { SignupSaga } from './signup';
import { AddTodoSaga } from './todo';
import { GetTodoSaga } from './getTodo';
import {
  LOGIN_START,
  SIGNUP_START,
  ADD_TODO,
  GET_TODO
} from 'constants/actionTypes';

export function* watchAuth() {
  yield all([
    takeEvery(SIGNUP_START, SignupSaga),
    takeEvery(LOGIN_START, LoginSaga),
  ]);
}

export function* watchTodo() {
  yield all([
    takeEvery(ADD_TODO, AddTodoSaga),
    takeEvery(GET_TODO, GetTodoSaga),
  ]);
}
