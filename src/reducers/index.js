import ADD_MESSAGE from '../constants/action-types';

const initialState = {
  messages: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_MESSAGE) {
    return { ...state, messages: state.messages.concat(action.payload) };
  }

  return state;
}

export default rootReducer;
