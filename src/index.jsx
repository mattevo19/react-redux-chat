// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import messageReducer from './reducers/messagesReducer';
import selectedChannelReducer from './reducers/selectedChannelReducer';

const identityReducer = (state = null) => state;

const initalState = {
  messages: [
    {
      "id": "1",
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "id":"2",
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ],
  channels: ['general','react','ruby'],
  selectedChannel: 'general',
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`
}

const reducers = combineReducers({
  messages: messageReducer,
  channels: identityReducer,
  currentUser: identityReducer,
  selectedChannel: selectedChannelReducer
});
// middlewares
const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initalState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
