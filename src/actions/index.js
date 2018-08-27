import {
  ADD_TODO,
  DELETE_TODO,
  LOGIN_TODO,
  LOGOUT_TODO,
  CLEAR_ITEMS,
} from 'constants/actionTypes';

export const addTodo = (text1, text2, date, option) => {
  const action = {
    type: ADD_TODO,
    text1,
    text2,
    date,
    option,
    id: Math.floor(Math.random()*1000000000),
  };
  return action;
};

export const deleteTodo = (id) => {
  const action = {
    type: DELETE_TODO,
    id,
  };
  console.log("actions deleted is", id);
  return action;
};

export const loginTodo = (email, password) => {
  const action = {
    type: LOGIN_TODO,
    email,
    password,
    auth: true,
  };
  return action;
};

export const logoutTodo = () => {
  const action = {
    type: LOGOUT_TODO,
    auth: false,
  };
  return action;
};

export const clearItems = () => {
  const action = {
    type: CLEAR_ITEMS,
  };
  return action;
};