import  { firebaseApp } from 'firebaseApp';
import { put, take, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as actions from 'actions';

const database = firebaseApp.database();
function insert(todo) {
    const newItemRef = database.ref('todos').push();
    return newItemRef.set(todo);
}
export function* AddTodoSaga(action) {
  console.log('starting add todo saga');
  const data = {
    todo: action.text1,
    todoDescription: action.text2,
    dueDate: action.date,
    todoType: action.option,
  };
  const item = JSON.parse(JSON.stringify(data));
  console.log('todo saga item: ', item);
  try{
    yield call(insert, item);
  } catch(error) {
    console.log('addtodo error: ', error);
  }
}
