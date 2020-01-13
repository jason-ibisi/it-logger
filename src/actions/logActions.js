import {
  GET_LOGS,
  ADD_LOG,
  SET_LOADING,
  DELETE_LOG,
  LOGS_ERROR
} from './types';

// Get Logs
export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({ type: GET_LOGS, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// Add a Log
export const addLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({ type: ADD_LOG, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// Delete Log
export const deleteLog = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      method: 'DELETE'
    });

    dispatch({ type: DELETE_LOG, payload: id });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// Set loading to 'true'
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
