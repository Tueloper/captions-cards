import { GET_ALL_CAPTIONS } from './../actionTypes/index';

const initialState = {
  captions: [],
  loading: true
};

function rootReducer (state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_CAPTIONS:
      return {
        ...state,
        captions: payload,
        loading: false
      }
    default:
      return state;
  }
}

export default rootReducer;
