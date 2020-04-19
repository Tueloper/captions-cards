import { GET_ALL_CAPTIONS, GET_ALL_TAGS } from './../actionTypes/index';

const initialState = {
  captions: [],
  tags: []
};

function rootReducer (state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_CAPTIONS:
      return {
        ...state,
        captions: payload
      }
    case GET_ALL_TAGS:
      return {
        ...state,
        tags: payload
      }
    default:
      return state;
  }
}

export default rootReducer;
