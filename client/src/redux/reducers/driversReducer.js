const driversReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_DRIVERS':
      return action.payload;

    case 'ADD_NEW_DRIVER':
      return [
        ...state,
        action.payload
      ];
    case 'DELETE_DRIVER':
      return state.filter((el) => el.id !== action.payload);

    default:
      return state;
  }
};

export default driversReducer;
