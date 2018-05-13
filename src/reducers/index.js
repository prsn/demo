import React from 'react';
import { combineReducers } from 'redux';
import ImageReducers from './image-reducer';

const Reducers = combineReducers({
  data: ImageReducers
});

export default Reducers