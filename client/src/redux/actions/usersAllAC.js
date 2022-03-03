import axios from 'axios';

export const setUsers = (value) => ({
  type: 'SET_USERS',
  payload: value
});
export const addUsers = (value) => ({
  type: 'ADD_USER',
  payload: value
});

export const getUsersThunk = () => async (dispatch) => {
  const res = await axios('/users');
  console.log(res.data.users);
  dispatch(setUsers(res.data.users));
};

// eslint-disable-next-line max-len
export const addUserThunk = (name, telephone, roleId, email, password) => async (dispatch) => {
  const res = await axios.post('/addUser', {
    name,
    telephone,
    roleId,
    email,
    password
  });
  dispatch(addUsers(res.data.newUser));
};
