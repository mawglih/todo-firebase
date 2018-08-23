import {
  ADD_TODO,
  DELETE_TODO,
  LOGIN_TODO,
  LOGOUT_TODO,
} from 'constants/actionTypes';

export const addTodo = (text1, text2, date) => {
  const action = {
    type: ADD_TODO,
    text1,
    text2,
    date,
    id: Math.floor(Math.random()*1000000000),
  }
  return action;
};

export const deleteTodo = (id) => {
  const action = {
    type: DELETE_TODO,
    id,
  }
  return action;
};

export const loginTodo = (email, password) => {
  const action = {
    type: LOGIN_TODO,
    email,
    password,
    auth: true,
  }
  return action;
}

export const logoutTodo = () => {
  const action = {
    type: LOGOUT_TODO,
    auth: false,
  }
  return action;
} 