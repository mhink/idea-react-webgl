import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "../sagas";

const reduxDevTools = window.devToolsExtension || (() => noop => noop);

export const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    sagaMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    reduxDevTools(),
  ];

  const store = createStore(
    rootReducer,
    initialState,
    compose(...enhancers)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
