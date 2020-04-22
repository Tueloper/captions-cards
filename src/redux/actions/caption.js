import { GET_ALL_CAPTIONS, FAIL_GET_ALL_CAPTIONS } from '../actionTypes/index';
import { setNotification } from './notification';
import Axios from 'axios';

export const getAllCaptions = () => async (dispatch) => {
  let status;
  let msg;
  try {
    const response = await Axios.get('https://capcards-api.herokuapp.com/v1.0/api/caption/')
    status = response.data.status;
    msg = 'Captions Gotten Successfully';
    dispatch(setNotification(status, msg))
    dispatch(
      {
      type: GET_ALL_CAPTIONS,
      payload: response.data.data.captions,
      }
    );
    } catch (error) {
      dispatch({
        type: FAIL_GET_ALL_CAPTIONS,
        payload: error.response.data.errors
      })
      return console.log(error.response)
    // status = error.response.status,
    // msg =error.response.error.message;
    // return setNotification(status, msg, 'red');
    }
};

export const addCaption = (caption) => async (dispatch) => {
  await Axios.post('https://capcards-api.herokuapp.com/v1.0/api/caption/', caption);
};
