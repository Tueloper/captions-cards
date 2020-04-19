import { GET_ALL_CAPTIONS, GET_ALL_TAGS } from '../actionTypes/index';
import Axios from 'axios';

export const getAllCaptions = () => async (dispatch) => {
  await Axios.get('https://capcards-api.herokuapp.com/v1.0/api/caption/')
    .then((response) => dispatch({
      type: GET_ALL_CAPTIONS,
      payload: response.data.data.captions,
    }));
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
