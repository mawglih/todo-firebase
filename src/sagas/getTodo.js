import  { firebaseApp } from 'firebaseApp';
import { put, take, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as actions from 'actions';

const database = firebaseApp.database().ref('todos');

export function* GetTodoSaga(action) {
  console.log('starting get todo saga');
  try{
    yield call(database.once('todo')
      .then((snapshot) => console.log(snapshot.val())));
  } catch(error) {
    console.log('addtodo error: ', error);
  }
}
