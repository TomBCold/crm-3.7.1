import axios from 'axios';

export const setClients = (value) => ({
  type: 'SET_CLIENTS',
  payload: value
});
export const getClients = () => async (dispatch) => {
  const res = await axios('/client');
  dispatch(setClients(res.data));
};

export const addNewClients = (value) => ({
  type: 'ADD_CLIENT',
  payload: value
});
export const addClient = (data) => async (dispatch) => {
  const res = await axios.post('/client', data);
  dispatch(addNewClients(res.data));
};

export const deleteClient = (value) => ({
  type: 'DEL_CLIENT',
  payload: value
});

export const delClient = (id) => async (dispatch) => {
  await axios.delete(`/client/${id}`);
  dispatch(deleteClient(id));
};
