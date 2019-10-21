import { combineReducers } from "redux";

import authReducer from "./authReducer";
import mealsReducer from "./mealsReducer";
import CartReducer from "./CartReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  authReducer: authReducer,
  mealsReducer: mealsReducer,
  CartReducer: CartReducer,
  profileReducer: profileReducer
});
