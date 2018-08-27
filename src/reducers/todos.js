import {
  ADD_TODO,
  DELETE_TODO,
  CLEAR_ITEMS,
} from 'constants/actionTypes';

const INITIAL_STATE = {
  data: [],
  deleted: [],
}

const removeById = (state = [], id) => {
  const removed = state.filter(el => el.id !== id);
  return removed;
}
const deletedById = (state = [], id) => {
  const deletedItem = state.filter(el => el.id === id);
  console.log('Items in deleted: ', deletedItem);
  return deletedItem;
}

const Todos = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        data: [...state.data, {
          id: action.id,
          text1: action.text1,
          text2: action.text2,
          date: action.date,
          option: action.option,
        }],
      };

    case DELETE_TODO:
      return {
        data: removeById(state.data, action.id),
        deleted: state.deleted.concat(deletedById(state.data, action.id)),       
      };

    case CLEAR_ITEMS:
      return {...state,
      };

    default:
      return state;
  }
}

export default Todos;