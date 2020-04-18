import { GET_ALL_CAPTIONS, ADD_CAPTION } from '../actionTypes/index';
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
