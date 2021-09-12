import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import authReducer from "./auth";
import salaryReducer from "./salary";
import alertReducer from "./alert";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  authReducer,
  salaryReducer,
  alertReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
