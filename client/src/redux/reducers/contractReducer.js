import { initState } from '../initState';

export const contractReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CONTRACTS':
      return payload;

    case 'DEL_CONTRACT':
      return state.filter((el) => el.id !== payload);

    default:
      return state;
  }
};
