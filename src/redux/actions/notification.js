import { Toolbox } from '../../utils'
import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION
} from '../actionTypes/index';

export const setNotification = (status, msg, alertType = '#2CC9A4', timeout = 5000) => async (dispatch) => {
  const id = Toolbox.generateReference(status)
  dispatch({
    type: ADD_NOTIFICATION,
    payload: { id, status, msg, alertType }
  });
  setTimeout(() => dispatch({ type: REMOVE_NOTIFICATION, payload: id }), timeout)
};
