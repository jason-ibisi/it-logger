import { SET_LOADING, COMMENTS_ERROR, ADD_LOG_COMMENT } from './types';

export const getComments = () => {};

export const addComments = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({ type: ADD_LOG_COMMENT, payload: data });
  } catch (error) {
    dispatch({ type: COMMENTS_ERROR });
  }
};

// Set loading to 'true'
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
