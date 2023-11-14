import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

// service
import {MovieService} from '../../service/movie/movieService';

// types
import {MovieType} from '../../service/movie/interface';
import {RootState} from '..';
import {discoverMovieKeys} from './discoverMovieKeys';

export interface CounterState {
  movieList: MovieType[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  movieList: [],
  status: 'idle',
};

export const getMovieListAsync = createAsyncThunk(
  discoverMovieKeys.fetchList,
  async () => {
    const response = await MovieService.getMovieList();
    console.log(response.data.results, 'INI DIA');
    return response.data || {};
  },
);

export const discoverMovieSlice = createSlice({
  name: 'discoverMovie',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: builder => {
    builder
      .addCase(getMovieListAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(getMovieListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.movieList = action.payload?.results || [];
      })
      .addCase(getMovieListAsync.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const selectMovieList = (state: RootState) =>
  state.discoverMovie.movieList;

export default discoverMovieSlice.reducer;
