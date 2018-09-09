import { combineReducers } from 'redux';
import Todos from './todos';
import Auth from './auth';
import { reducer as formReducer} from 'redux-form';

const reducer = combineReducers({
  todos: Todos,
  auth: Auth,
  form: formReducer,
});

export default reducer;