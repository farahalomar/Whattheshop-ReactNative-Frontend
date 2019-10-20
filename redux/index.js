import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { checkForExpiredToken } from "./actions";

import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middlewares = [thunk];
const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));
const store = createStore(rootReducer, enhancer);
store.dispatch(checkForExpiredToken());

export default store;
