import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './main/components/App';
import rootReducer from './main/reducer';

const compose = composeWithDevTools(applyMiddleware(thunk));

const store: Store<any> = createStore(rootReducer, compose);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);