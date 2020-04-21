import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './../actionTypes/index';

const initialState = {
  notifications: []
};

function rootReducer (state = initialState, { type, payload }) {
  switch (type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notifications: payload
      }
    case REMOVE_NOTIFICATION:
      return state.notifications.filter((notification) => notification.id !== payload)
    default:
      return state;
  }
}

export default rootReducer;
