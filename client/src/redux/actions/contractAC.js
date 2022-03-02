import axios from 'axios';

export const setContracts = (value) => ({
  type: 'SET_CONTRACTS',
  payload: value
});
export const getContracts = () => async (dispatch) => {
  const res = await axios('/contract');
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

export const putStatusContract = (value, status) => ({
  type: 'PUT_CONTRACT',
  payload: { value, status }
});

export const putStatusContractServer = (id, stutus, status) => async (dispatch) => {
  console.log(stutus);
  const resp = await axios.put(`/contract/${id}`, { stutus, status });
  console.log(resp.data);
  dispatch(putStatusContract(resp.data, status));
};
