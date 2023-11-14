import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import discoverMovie from './movie/discoverMovieSlice';

export const store = configureStore({
  reducer: {
    discoverMovie,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
