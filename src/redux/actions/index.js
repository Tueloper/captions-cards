import { GET_ALL_CAPTIONS, } from '../constants/action-types';

export function getAllCaptions(payload) {
  return { type: GET_ALL_CAPTIONS, payload }
}
