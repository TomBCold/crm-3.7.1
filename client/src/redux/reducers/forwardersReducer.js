const forwardersReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_FORWARDERS':
      return action.payload;

    case 'ADD_NEW_FORWARDER':
      return [
        ...state,
        action.payload
      ];
    case 'DELETE_FORWARDER':
      return state.filter((el) => el.id !== action.payload);

    default:
      return state;
  }
};

export default forwardersReducer;
