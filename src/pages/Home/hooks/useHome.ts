/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';

// utils
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';

// redux
import {
  getMovieListAsync,
  selectMovieList,
} from '../../../store/movie/discoverMovieSlice';

export const useHome = () => {
  const movieList = useAppSelector(selectMovieList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovieListAsync());
  }, []);

  return {
    movieList,
  };
};
