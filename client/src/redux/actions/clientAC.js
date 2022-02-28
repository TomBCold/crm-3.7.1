import axios from 'axios';

export const setClients = (value) => ({
  type: 'SET_CLIENTS',
  payload: value
});
export const getClients = () => async (dispatch) => {
  const res = await axios('/clients');
  dispatch(setClients(res.data));
};

export const addNewClients = (value) => ({
  type: 'ADD_CLIENT',
  payload: value
});
export const addClient = (data) => async (dispatch) => {
  const res = await axios.post('/clients', data);
  dispatch(addNewClients(res.data));
};
