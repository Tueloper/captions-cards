import {
  GET_ALL_CAPTIONS,
  GET_ALL_TAGS
} from '../actionTypes/index';
import { setNotification } from './notification';
import Axios from 'axios';

export const getAllCaptions = () => async (dispatch) => {
  let status;
  let msg;
  await Axios.get('https://capcards-api.herokuapp.com/v1.0/api/caption/')
    .then(async(response) => {
      // return console.log(response)
      status = response.data.status;
      msg = 'Captions Gotten Successfully';
      await setNotification(status, msg, 'green');

      dispatch(
        {
        type: GET_ALL_CAPTIONS,
        payload: response.data.data.captions,
        })
      }
    )
    .catch(async (error) => {
      return console.log(error.response)
      // status = error.response.status,
      // msg =error.response.error.message;
      // return setNotification(status, msg, 'red');
    }
    )
};

export const addCaption = (caption) => async (dispatch) => {
  await Axios.post('https://capcards-api.herokuapp.com/v1.0/api/caption/', caption);
};

export const getAllTags = () => async (dispatch) => {
  await Axios.get('https://capcards-api.herokuapp.com/v1.0/api/tag/')
    .then((response) => dispatch({
      type: GET_ALL_TAGS,
      payload: response.data.data.tags,
    }));
};

export const addTag = (tag) => async (dispatch) => {
  await Axios.post('https://capcards-api.herokuapp.com/v1.0/api/caption/', tag).then((res) => console.log(res))
};
