/* eslint-disable no-lone-blocks */
import { GET_ALL_CAPTIONS, FAIL_GET_ALL_CAPTIONS, FAIL_ADD_CAPTION } from '../actionTypes/index';
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
      {
        error.message.startsWith('Network')
          ? dispatch(setNotification(error.status, error.message))
          : dispatch(setNotification(error.response.data.error.status, error.response.data.error.status ))
      }
      dispatch({
        type: FAIL_GET_ALL_CAPTIONS,
        payload: error.response.data.errors
      })
    }
};

export const addCaption = (caption) => async (dispatch) => {
  let status;
  let msg;
  try {
    const res = await Axios.post('https://capcards-api.herokuapp.com/v1.0/api/caption/', caption);
    status = res.data.status;
    msg = 'Caption Added Successfully';
    dispatch(setNotification(status, msg));
  } catch (error) {
    // return console.log(error.response)
    {
      error.message.startsWith('Network')
        ? dispatch(setNotification(error.status, error.message))
        : dispatch(setNotification(error.response.status, error.response.data.error.message ))
    }
    dispatch({
      type: FAIL_ADD_CAPTION,
      payload: error.response.data.errors
    })
  }

};
