import { combineReducers } from "redux";

import authReducer from "./authReducer";
import mealsReducer from "./mealsReducer";
import CartReducer from "./CartReducer";
import profileReducer from "./profileReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  authReducer: authReducer,
  mealsReducer: mealsReducer,
  CartReducer: CartReducer,
  profileReducer: profileReducer,
  orderReducer: orderReducer
});
