import { initState } from '../initState';

export const usersAllReduser = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_USERS':
      return payload;

    case 'ADD_USER':
      return [payload, ...state];

    default:
      return state;
  }
};
