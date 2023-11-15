import {useEffect} from 'react';

import {
  getMovieByIdAsync,
  selectMovieDetail,
  selectMovieState,
} from '../../store/movie/discoverMovieSlice';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {useNavigation} from '../../utils/useNavigation';
import {SCREEN} from '../../types/screen';

export const useMovieDetail = () => {
  const dispatch = useAppDispatch();
  const {params, navigate} = useNavigation();
  const movieDetail = useAppSelector(selectMovieDetail);
  const movieState = useAppSelector(selectMovieState);

  const {movieId, from} = params;

  const onNavigateToList = () => {
    navigate(SCREEN.MAIN_LIST, {
      screen: SCREEN.LIST,
      params: {
        movieId,
        from: SCREEN.MOVIE_DETAIL,
      },
    });
  };

  useEffect(() => {
    dispatch(getMovieByIdAsync(movieId));
  }, []);

  return {
    movieDetail,
    from,
    loading: movieState === 'loading',
    onNavigateToList,
  };
};
