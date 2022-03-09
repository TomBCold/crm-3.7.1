const carTypesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_CAR_TYPES':
      return action.payload;

    default:
      return state;
  }
};

export default carTypesReducer;
