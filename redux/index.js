// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import authReducer from "./authReducer";
// // import { checkForExpiredToken } from "./redux/actions";
// const middlewares = [thunk];
// const enhancer = composeWithDevTools({
//  // Options: https://github.com/jhen0409/react-native-debugger#options
// })(applyMiddleware(...middlewares));
// const rootReducer = combineReducers({
//  rootAuth: authReducer
// });
// const store = createStore(rootReducer, enhancer);
// // store.dispatch(checkForExpiredToken());
// export default store;

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
