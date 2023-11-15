import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: function (state = '', action) {
    switch (action.type) {
      case 'returns ID/fulfilled':
        return action.payload;
      default:
        return {
          discoverMovie: {movieDetail: {}},
        };
    }
  },
});

export const Wrapper = ({children}: any) => (
  <Provider store={store}>{children}</Provider>
);
