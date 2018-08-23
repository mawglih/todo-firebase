import { combineReducers } from 'redux';
import Todos from './todos';

const reducer = combineReducers({
  todos: Todos
});

export default reducer;