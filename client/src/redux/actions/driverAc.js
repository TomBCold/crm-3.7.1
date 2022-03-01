import axios from 'axios';

export const getAllDrivers = (drivers) => ({
  type: 'GET_ALL_DRIVERS',
  payload: drivers
});

export const getAllDriversFromServer = () => async (dispatch) => {
  const response = await axios('http://localhost:3001/drivers');
  dispatch(getAllDrivers(response.data.driverAll));
};

export const addDriver = (value) => ({
  type: 'ADD_NEW_DRIVER',
  payload: value
});
export const addDriverFromServer = (name, telephone, carTypeId) => async (dispatch) => {
  const res = await axios.post('http://localhost:3001/drivers', { name, telephone, carTypeId });
  dispatch(addDriver(res.data.newDriver));
};

export const deleteDriver = (id) => ({
  type: 'DELETE_DRIVER',
  payload: id
});

export const deleteDriverFromServer = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3001/drivers/${id}`);
  dispatch(deleteDriver(id));
};
