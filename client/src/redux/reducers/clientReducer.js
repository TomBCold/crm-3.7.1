import { initState } from '../initState';

export const clientReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CLIENTS':
      return payload;

    case 'ADD_CLIENT':
      return payload;

    default:
      return state;
  }
};
