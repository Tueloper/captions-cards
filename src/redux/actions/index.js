import { GET_ALL_CAPTIONS, } from '../actionTypes/index';

export const getAllCaptions = () => async (dispatch) => {
  await fetch('https://capcards-api.herokuapp.com/v1.0/api/caption/')
    .then((res) => res.json())
    .then((response) => dispatch({
      type: GET_ALL_CAPTIONS,
      payload: response.data.captions,
    }));
};
