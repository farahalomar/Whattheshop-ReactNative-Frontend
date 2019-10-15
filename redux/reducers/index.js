import { combineReducers } from "redux";

import authReducer from "./authReducer";
import mealsReducer from "./mealsReducer";
import CartReducer from "./CartReducer";

export default combineReducers({
  authReducer: authReducer,
  mealsReducer: mealsReducer,
  CartReducer: CartReducer
});
