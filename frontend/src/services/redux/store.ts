import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import UserReducer from "./reducers/UserReducer";

// interface ExtendedWindow extends Window {
//   __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
// }

// declare let window: ExtendedWindow;

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(UserReducer, composeWithDevTools());

export default store;
