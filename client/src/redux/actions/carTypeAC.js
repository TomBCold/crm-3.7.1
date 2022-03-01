import axios from 'axios';

export const getAllCarTypes = (drivers) => ({
  type: 'GET_CAR_TYPES',
  payload: drivers
});

export const getAllCarTypesFromServer = () => async (dispatch) => {
  const response = await axios('http://localhost:3001/types');
  dispatch(getAllCarTypes(response.data.types));
};
