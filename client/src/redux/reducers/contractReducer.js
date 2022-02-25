import { initState } from '../initState';

export const contractReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CONTRACTS':
      return payload;

    default:
      return state;
  }
};
