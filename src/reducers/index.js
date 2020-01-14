import { combineReducers } from 'redux';
import logReducer from './logReducer';
import technicianReducer from './technicianReducer';
import commentReducer from './commentReducer';

export default combineReducers({
  log: logReducer,
  technician: technicianReducer,
  comment: commentReducer
});
