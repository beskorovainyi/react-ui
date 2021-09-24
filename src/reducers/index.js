import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {routerReducer} from "react-router-redux";

const rootReducer = combineReducers({
  routing: routerReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))