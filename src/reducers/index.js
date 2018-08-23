import { combineReducers } from 'redux';
import Todos from './todos';
import Auth from './auth';

const reducer = combineReducers({
  todos: Todos,
  auth: Auth,
});

export default reducer;