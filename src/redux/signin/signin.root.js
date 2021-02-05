const INITIAL_STATE = {
  email: "",
  password: ""
};

const signInReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGNIN_INPUT_EMAIL":
      return {
        ...state,
        email: action.payload
      };

    case "SIGNIN_INPUT_PASSWORD":
      return {
        ...state,
        password: action.payload
      };

    default:
      return state;
  }
};

export default signInReducer;
