export const userReducer = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_USER':
      return payload;
    case 'CHANGE_USER':
      return { ...state, photo: payload };

    default:
      return state;
  }
};
