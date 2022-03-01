import axios from 'axios';

export const setContracts = (value) => ({
  type: 'SET_CONTRACTS',
  payload: value
});
export const getContracts = () => async (dispatch) => {
  const res = await axios('/contracts');
  dispatch(setContracts(res.data));
};

export const deleteContract = (value) => ({
  type: 'DEL_CONTRACT',
  payload: value
});

export const delContract = (id) => async (dispatch) => {
  await axios.delete(`/contract/${id}`);
  dispatch(deleteContract(id));
};
