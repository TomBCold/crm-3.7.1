import axios from 'axios';

export const setContracts = (value) => ({
  type: 'SET_CONTRACTS',
  payload: value
});
export const getContracts = () => async (dispatch) => {
  const res = await axios('/contracts');
  dispatch(setContracts(res.data));
};
