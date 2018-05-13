import { handleActions } from 'redux-actions';
import { SET_IMAGES, UPDATE_IMAGE } from '../actions/action-types';

const intial={
  awaitingData: false
};

const NestedImageReducers = handleActions({
  [UPDATE_IMAGE]: (state, action) => {
    return {
      ...state,
      [action.payload.id]: action.payload
    }
  }
}, intial);

export default NestedImageReducers;
