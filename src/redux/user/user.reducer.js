const INITIAL_STATE = {
  user: null,
  counter: 0
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload
      };

    case "IMG_COUNTER":
      return {
        ...state,
        counter: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
