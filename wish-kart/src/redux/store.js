import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

// const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
