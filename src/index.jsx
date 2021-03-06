import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client';
import MainFunc from './common';

import { configureStore } from '@reduxjs/toolkit';
import {book_slice} from './state_reducers';

export const store = configureStore({
  reducer: {
    book_slice: book_slice.reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainFunc />
    </Provider>
  </React.StrictMode>
);
