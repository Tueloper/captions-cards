import {
  GET_ALL_TAGS,
  FAIL_GET_ALL_TAGS,
  // SET_LOADER
} from '../actionTypes/index';
import { setNotification } from './notification';
import Axios from 'axios';

export const getAllTags = () => async (dispatch) => {
  let status;
  let msg;
  try {
    const response = await Axios.get('https://capcards-api.herokuapp.com/v1.0/api/tag/');
    status = response.data.status;
    msg = 'Captions Gotten Successfully';
    dispatch(setNotification(status, msg, 'green'))
    await dispatch({
        type: GET_ALL_TAGS,
        payload: response.data.data.tags,
    });

  } catch (error) {
    dispatch({
      type: FAIL_GET_ALL_TAGS,
      payload: error.response.data.errors
    })
    return console.log(error.response)
  }

};

export const addTag = (tag) => async (dispatch) => {
  await Axios.post('https://capcards-api.herokuapp.com/v1.0/api/caption/', tag).then((res) => console.log(res))
};
