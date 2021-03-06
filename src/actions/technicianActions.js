import {
  GET_TECHNICIANS,
  ADD_TECHNICIAN,
  DELETE_TECHNICIAN,
  SET_LOADING,
  TECHNICIANS_ERROR
} from './types';

// Get technicians
export const getTechnicians = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/technicians');
    const data = await res.json();

    dispatch({ type: GET_TECHNICIANS, payload: data });
  } catch (err) {
    dispatch({ type: TECHNICIANS_ERROR, payload: err.response.statusText });
  }
};

// Add a Technician
export const addTechnician = technician => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/technicians', {
      method: 'POST',
      body: JSON.stringify(technician),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({ type: ADD_TECHNICIAN, payload: data });
  } catch (err) {
    dispatch({ type: TECHNICIANS_ERROR, payload: err.response.statusText });
  }
};

// Delete a technician
export const deleteTechnician = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/technicians/${id}`, {
      method: 'DELETE'
    });

    dispatch({ type: DELETE_TECHNICIAN, payload: id });
  } catch (err) {
    dispatch({ type: TECHNICIANS_ERROR, payload: err.response.statusText });
  }
};

// Set loading to 'true'
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
