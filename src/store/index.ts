import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import discoverMovie from './movie/discoverMovieSlice';
import collectionList from './collectionList/collectionList';

export const store = configureStore({
  reducer: {
    discoverMovie,
    collectionList,
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
