import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import imageReducer from '../reducers/imageReducer';

export default (preloadedState) => {
  return createStore(
    imageReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  );
};
