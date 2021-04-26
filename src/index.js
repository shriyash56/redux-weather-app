import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
//import ReduxPromise from 'redux-promise';
import createSagaMiddleware from "redux-saga";
//import styles from './style.css';
import rootSaga from "./sagas";

import App from "./components/app";
import reducers from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";

//const createStoreWithMiddleware = applyMiddleware()(createStore);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
