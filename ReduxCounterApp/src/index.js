import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from "react-redux";
import { createLogger } from 'redux-logger';
import Counter from './containers/Counter'
import reducers from './reducers'

const logger = createLogger();

const enhancer = compose(
  applyMiddleware(logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducers, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);