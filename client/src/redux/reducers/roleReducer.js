const roleReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ROLES':
      return action.payload;

    default:
      return state;
  }
};

export default roleReducer;
