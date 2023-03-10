import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import reportWebVitals from './reportWebVitals';
import middleware from './middleware';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
