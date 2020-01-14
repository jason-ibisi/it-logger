import { SET_LOADING, GET_TECHNICIANS } from '../actions/types';

const initialState = {
  technicians: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHNICIANS:
      return {
        ...state,
        technicians: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
