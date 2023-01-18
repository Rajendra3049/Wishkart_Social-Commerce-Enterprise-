import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import ProductReducer from "./products/product.Reducer.js";

const rootReducer = combineReducers({
  MangaeProducts:ProductReducer
})

const comp = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer, comp(applyMiddleware(thunk)));
