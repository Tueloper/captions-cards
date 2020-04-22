/* eslint-disable no-lone-blocks */
import { GET_ALL_TAGS, FAIL_GET_ALL_TAGS, FAIL_ADD_TAG } from '../actionTypes/index';
import { setNotification } from './notification';
import Axios from 'axios';

export const getAllTags = () => async (dispatch) => {
  let status;
  let msg;
  try {
    const response = await Axios.get('https://capcards-api.herokuapp.com/v1.0/api/tag/');
    status = response.data.status;
    msg = 'Tags Gotten Successfully';
    dispatch(setNotification(status, msg))
    dispatch({
        type: GET_ALL_TAGS,
        payload: response.data.data.tags,
    });

  } catch (error) {
    {
      error.message.startsWith('Network')
        ? dispatch(setNotification(error.status, error.message))
        : dispatch(setNotification(error.response.status, error.response.data.error.message ))
    }
    dispatch({
      type: FAIL_GET_ALL_TAGS,
      payload: error.response
    })
    return console.log(error.response)
  }

};

export const addTag = (tag) => async (dispatch) => {
  let status;
  let msg;
  try {
    const res = await  await Axios.post('https://capcards-api.herokuapp.com/v1.0/api/caption/', tag);
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
    // dispatch({
    //   type: FAIL_ADD_TAG,
    //   payload: error.response.data.errors
    // })
  }
};
