import {
  ADD_TODO,
  DELETE_TODO,
  LOGIN_TODO,
  LOGOUT_TODO,
  CLEAR_ITEMS,
  LOGIN_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  GET_TODO,
} from 'constants/actionTypes';

export const addTodo = (formProps) => {
  const action  = {
    type: ADD_TODO,
    text1: formProps.todo,
    text2: formProps.textTodo,
    date: formProps.date,
    option: formProps.todo2,
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

export const loginStart = (email, password) => {
  return {
    type: LOGIN_START,
    email,
    password
  };
};

export const loginFailure = () => {
  return {
      type: LOGIN_FAILURE
  };
};
export const loginSuccess = (user) => {
  console.log('action success: ', user);
  return {
    type: LOGIN_SUCCESS,
    auth: true,
    payload: user,
  }
}

export const signupStart = ({ email, password }) => {
  console.log("actions signupStart: ", email, password );
  const action = {
    type: SIGNUP_START,
    email,
    password,
  };
  console.log("action is ", action)
  return action;
};

export const signupFailure = () => {
  const action = {
      type: SIGNUP_FAILURE,
  };
  return action;
};
export const signupSuccess = (user) => {
  console.log('action success: ', user);
  const action =  {
    type: SIGNUP_SUCCESS,
    auth: true,
    payload: user,
  }
  return action;
};

export const getTodo = () => {
  const action = {
    type: GET_TODO,
  }
}
