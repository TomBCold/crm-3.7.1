import axios from 'axios';

export const getAllDrivers = (drivers) => ({
  type: 'GET_ALL_DRIVERS',
  payload: drivers
});

export const getAllDriversFromServer = () => async (dispatch) => {
  const response = await axios('http://localhost:3001/drivers');
  console.log(response.data.driverAll);
  dispatch(getAllDrivers(response.data.driverAll));
};
