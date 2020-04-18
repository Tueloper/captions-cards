import { GET_ALL_CAPTIONS } from './../actionTypes/index';

const initialState = {
  captions: []
};

function rootReducer (state = initialState, action) {

  // payload is an object
  if (action.type === GET_ALL_CAPTIONS) return state.characters = [...state.captions, action.payload];

  return state;
}

export default rootReducer;
