import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './../actionTypes/index';

const initialState = {
  notifications: []
};

function rootReducer (state = initialState, { type, payload }) {
  switch (type) {
    case ADD_NOTIFICATION:
      return Object.assign({}, state, {
        notifications: state.notifications.concat(payload)
      })
    case REMOVE_NOTIFICATION:
      return Object.assign({}, state, {
        notifications: state.notifications.filter((item, i) => item.id !== payload )
      })
    default:
      return state;
  }
}

export default rootReducer;
