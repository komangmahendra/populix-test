import {useEffect} from 'react';

// utils
import {useAppDispatch, useAppSelector} from '../../utils/hooks';

// redux
import {
  getMovieListAsync,
  selectMovieList,
} from '../../store/movie/discoverMovieSlice';
import {useNavigation} from '../../utils/useNavigation';
import {SCREEN} from '../../types/screen';

export const useHome = () => {
  const movieList = useAppSelector(selectMovieList);
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();

  const onNavigateToMovieDetail = (movieId: number) => {
    navigate(SCREEN.MAIN_HOME, {
      screen: SCREEN.MOVIE_DETAIL,
      params: {
        movieId,
      },
    });
  };

  useEffect(() => {
    dispatch(getMovieListAsync());
  }, []);

  return {
    movieList,
    onNavigateToMovieDetail,
  };
};
