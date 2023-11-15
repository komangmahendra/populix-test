import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {
  getCollectionByIdAsync,
  selectCollectionDetail,
} from '../../store/collectionList/collectionList';
import {SCREEN} from '../../types/screen';
import {useNavigation} from '../../utils/useNavigation';

export const useMyListDetail = () => {
  const dispatch = useAppDispatch();
  const {navigate, params} = useNavigation();
  const listDetail = useAppSelector(selectCollectionDetail);
  const {listId} = params as any;

  const onNavigateToMovieDetail = (movieId: number) => {
    navigate(SCREEN.MAIN_HOME, {
      screen: SCREEN.MOVIE_DETAIL,
      params: {movieId, from: SCREEN.LIST_DETAIL},
    });
  };

  useEffect(() => {
    dispatch(getCollectionByIdAsync(listId));
  }, []);

  return {
    listDetail,
    onNavigateToMovieDetail,
  };
};
