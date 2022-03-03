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

export const checkUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/check');
    setTimeout(() => {
      dispatch(setUser({ ...res.data, status: 'done' }));
    }, 700);
  } catch (error) {
    dispatch(setUser({ status: 'error' }));
  }
};
export const userLogout = () => async (dispatch) => {
  await axios.post('/logout');
  dispatch(checkUser());
};
