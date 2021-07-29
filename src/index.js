import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';

const initialState = {
  Books: [
    {
      ISBN: Math.floor(Math.random() * 100000001),
      title: 'Redux How to',
      category: 'Learning',
    },
    {
      ISBN: Math.floor(Math.random() * 100000001),
      title: 'Winnie the kitten',
      category: 'Kids',
    },
    {
      ISBN: Math.floor(Math.random() * 100000001),
      title: 'Abraham Lincoln',
      category: 'Biography',
    },
    {
      ISBN: Math.floor(Math.random() * 100000001),
      title: 'Entrapment',
      category: 'Action',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
