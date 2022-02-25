const forwardersReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_FORWARDERS':
      console.log(action.payload);
      return action.payload;

    case 'ADD_NEW_FORWARDER':
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};

export default forwardersReducer;
