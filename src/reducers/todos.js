const INITIAL_STATE = {
  data: []
}

const Todos = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        data: [...state.data, {
          id: action.id,
          text1: action.text1,
          text2: action.text2,
        }]
      };

    case 'DELETE_TODO':
      return {};

    default:
      return state;
  }
}

export default Todos;