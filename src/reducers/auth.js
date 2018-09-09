import {
  LOGIN_SUCCESS,
  LOGOUT_TODO,
} from 'constants/actionTypes';

const INITIAL_STATE = {
  auth: {
    email: '',
    password: '',
    loggedIn: false,
  }
};

const Auth = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
    return {
      ...state,
        auth: {...state.auth, 
          email: action.email,
          password: action.password,
          loggedIn: action.auth,
        },
    };
    case LOGOUT_TODO:
      return {
        ...state,
        auth: {
          ...state.auth,
          email: '',
          password: '',
          loggedIn: false,
        }
      }
    default:
      return state;
  }
}

export default Auth;