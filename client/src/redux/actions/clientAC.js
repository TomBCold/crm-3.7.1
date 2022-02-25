import axios from 'axios';

export const setClients = (value) => ({
  type: 'SET_CLIENTS',
  payload: value
});
export const getClients = () => async (dispatch) => {
  const res = await axios('/clients');
  dispatch(setClients(res.data));
};
