import axios from 'axios';

export const getAllForwarders = (forwarders) => ({
  type: 'GET_ALL_FORWARDERS',
  payload: forwarders
});

export const getAllForwardersFromServer = () => async (dispatch) => {
  const response = await axios('http://localhost:3001/forwarders');
  dispatch(getAllForwarders(response.data.forwardersAll));
};

export const addForwarder = (value) => ({
  type: 'ADD_NEW_FORWARDER',
  payload: value
});
export const addForwarderFromServer = (name, telephone) => async (dispatch) => {
  const res = await axios.post('http://localhost:3001/forwarders', { name, telephone });
  dispatch(addForwarder(res.data.forwarder));
};

export const deleteForwarder = (id) => ({
  type: 'DELETE_FORWARDER',
  payload: id
});

export const deleteForwarderFromServer = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3001/forwarders/${id}`);
  dispatch(deleteForwarder(id));
};
