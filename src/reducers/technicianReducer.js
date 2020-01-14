import {
  SET_LOADING,
  GET_TECHNICIANS,
  ADD_TECHNICIAN,
  TECHNICIANS_ERROR
} from '../actions/types';

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
    case ADD_TECHNICIAN:
      return {
        ...state,
        technicians: [...state.technicians, action.payload],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case TECHNICIANS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
