const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
};

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REGISTER_NAME":
      return {
        ...state,
        name: action.payload
      };

    case "REGISTER_EMAIL":
      return {
        ...state,
        email: action.payload
      };

    case "REGISTER_PASSWORD":
      return {
        ...state,
        password: action.payload
      };

    default:
      return state;
  }
};

export default registerReducer;
