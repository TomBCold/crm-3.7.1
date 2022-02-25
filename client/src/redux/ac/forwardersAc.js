import axios from 'axios';

export const getAllForwarders = (forwarders) => ({
  type: 'GET_ALL_FORWARDERS',
  payload: forwarders
});

export const getAllForwardersFromServer = () => async (dispatch) => {
  const response = await axios('http://localhost:3001/forwarders');
  console.log('forwarders', response.data.forwardersAll);
  dispatch(getAllForwarders(response.data.forwardersAll));
};
