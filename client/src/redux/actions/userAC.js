import axios from 'axios';
// import { SET_USER } from '../types/types';

export const setUser = (value) => ({
  type: 'SET_USER',
  payload: value
});

export const getUser = (input) => async (dispatch) => {
  const res = await axios.post('/user/signup', input);
  dispatch(setUser(res.data.user));
};

export const signUpUser = ({ email, password }) => async (dispatch) => {
  console.log(email, password);
  const res = await axios.post('/auth', { email, password }, { withCredentials: true });
  console.log(res.data.manager);

  dispatch(setUser(res.data.manager));
};

export const userLogout = () => async (dispatch) => {
  await axios.post('/user/logout');
  dispatch(setUser(null));
};
export const checkUser = () => async (dispatch) => {
  const res = await axios.post('/user/check');
  console.log(res);
  if (res.statusText) {
    dispatch(setUser(res.data.user));
  } else {
    dispatch(setUser(null));
  }
};
