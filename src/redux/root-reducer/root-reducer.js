import { combineReducers } from "redux";

import routeReducer from "../route.state/route.state";

import imgLinkReducer from "../input.redux/input.reducer";
import signInReducer from "../signin/signin.root";
import registerReducer from "../register.reducer/register.reducer";
import userReducer from "../user/user.reducer";

const rootReducer = combineReducers({
  img: imgLinkReducer,
  route: routeReducer,
  signIn: signInReducer,
  register: registerReducer,
  user: userReducer
});

export default rootReducer;
