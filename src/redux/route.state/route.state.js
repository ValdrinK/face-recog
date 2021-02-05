const INITIAL_STATE = {
  route: "signin"
};

const routeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ROUTE_SIGNIN":
      return {
        ...state,
        route: "signin"
      };

    case "ROUTE_HOME":
      return {
        ...state,
        route: "home"
      };

    case "ROUTE_REGISTER":
      return {
        ...state,
        route: "register"
      };

    default:
      return state;
  }
};

export default routeReducer;
