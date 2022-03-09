import { initState } from '../initState';

export const contractReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CONTRACTS':
      return payload;

    case 'DEL_CONTRACT':
      return state.filter((el) => el.id !== payload);

    case 'PUT_CONTRACT':
      return state.map((el) => {
        if (el.id === action.payload.value.id) {
          return {
            ...el,
            [action.payload.status]: action.payload.value[action.payload.status]
          };
        }
        return el;
      });

    case 'ADD_CONTRACT':
      return [payload, ...state];

    default:
      return state;
  }
};
