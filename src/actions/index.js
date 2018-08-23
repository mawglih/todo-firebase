import {
  ADD_TODO,
  DELETE_TODO,
} from 'constants/actionTypes';

export const addTodo = (text1, text2) => {
  const action = {
    type: ADD_TODO,
    text1,
    text2,
    id: Math.floor(Math.random()*1000000000),
  }
  console.log("action in addTodo: ", action);
  return action;
};

export const deleteTodo = (id) => {
  const action = {
    type: DELETE_TODO,
    id,
  }
  console.log("deleting in actions: ", action);
  return action;
};