import { createStore, applyMiddleware  } from "redux";
import { rootReducers } from "./reducer/rootReducer";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export const store = createStore(rootReducers, composedEnhancer);
