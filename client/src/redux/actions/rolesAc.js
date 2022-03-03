import axios from 'axios';

export const getAllRoles = (drivers) => ({
  type: 'GET_ROLES',
  payload: drivers
});

export const getAllRolesFromServer = () => async (dispatch) => {
  const response = await axios('http://localhost:3001/roles');
  console.log(response.data);
  dispatch(getAllRoles(response.data.roles));
};
