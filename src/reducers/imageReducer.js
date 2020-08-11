import { SET_IMAGES, SET_IMAGES_LOADING } from '../actions/images/actionTypes';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case SET_IMAGES_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
