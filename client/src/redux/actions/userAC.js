import axios from 'axios';

export const setUser = (value) => ({
  type: 'SET_USER',
  payload: value
});

export const getUser = (input) => async (dispatch) => {
  const res = await axios.post('/user/signup', input);
  dispatch(setUser(res.data.user));
};

export const signUpUser = ({ email, password }) => async (dispatch) => {
  const res = await axios.post('/auth', { email, password }, { withCredentials: true });
  dispatch(setUser(res.data.manager));
};

export const userLogout = () => async (dispatch) => {
  await axios.post('/user/logout');
  dispatch(setUser(null));
};
export const checkUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/check');
    dispatch(setUser(res.data));
  } catch (error) {
    dispatch(setUser({}));
  }
};
