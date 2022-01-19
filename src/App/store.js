import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import CounterReducer from "./CounterFeature/reducer";

let rootReducers = combineReducers({
  counter: CounterReducer,
});

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducers, composeEnhacers(applyMiddleware(thunk)));
export default store;
