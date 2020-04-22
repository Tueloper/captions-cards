import { GET_ALL_TAGS } from './../actionTypes/index';

const initialState = {
  tags: [],
  loading: true
};

function rootReducer (state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_TAGS:
      return {
        ...state,
        tags: payload,
        loading: false
      }
    default:
      return state;
  }
}

export default rootReducer;
