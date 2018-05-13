import { handleActions } from 'redux-actions';
import { SET_IMAGES, UPDATE_IMAGE } from '../actions/action-types';
import NestedImageReducers from './nested-reducer';

const intial={
  awaitingData: false,
  images: {}
};

const ImageReducers = handleActions({
  [SET_IMAGES]: (state, action) => {
    return {
      ...state,
      images: action.payload
    }
  },
  [UPDATE_IMAGE]: (state, action) => {
    return {
      ...state,
      images: Object.assign(state.images, NestedImageReducers(state.images[action.payload.id], action))
    }
  }
}, intial);

export default ImageReducers;
