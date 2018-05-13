import { SET_IMAGES, UPDATE_IMAGE } from './action-types';
import data from './data';

export function setImages() {
  return dispatch => {
    dispatch({
      type: SET_IMAGES,
      payload: data
    });
  }
}

export function updateImage(image) {
  return dispatch => {
    dispatch(
      {
        type: UPDATE_IMAGE,
        payload: image
      }
    );
  }
}
