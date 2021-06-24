import React from 'react';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './redux/reducers';
import Navigation from './routes/Navigation';
import {StatusBar} from 'react-native';

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <Navigation />
    </Provider>
  );
}
