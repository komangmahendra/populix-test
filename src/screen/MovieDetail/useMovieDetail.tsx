import {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';

import {
  getMovieByIdAsync,
  selectMovieDetail,
  selectMovieState,
} from '../../store/movie/discoverMovieSlice';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';

export const useMovieDetail = () => {
  const dispatch = useAppDispatch();
  const route = useRoute();
  const movieDetail = useAppSelector(selectMovieDetail);
  const movieState = useAppSelector(selectMovieState);

  const {movieId} = route.params as any;

  useEffect(() => {
    dispatch(getMovieByIdAsync(movieId));
  }, []);

  return {
    movieDetail,
    loading: movieState === 'loading',
  };
};
