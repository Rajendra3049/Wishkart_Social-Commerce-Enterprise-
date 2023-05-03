import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

// import reducer function
import ProductReducer from "./Products/product.Reducer.js";
import UserReducer from "./user/user.reducer.js";
import AdminReducer from "./admin/admin.reducer.js";

const rootReducer = combineReducers({
  ProductsManager: ProductReducer,
  UserManager: UserReducer,
  AdminManager: AdminReducer,
});

const comp = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  comp(applyMiddleware(thunk))
);
