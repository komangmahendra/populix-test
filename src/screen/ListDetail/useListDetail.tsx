import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {
  getCollectionByIdAsync,
  getCollectionListAsync,
  selectCollectionDetail,
  selectStateCollectionState,
} from '../../store/collectionList/collectionList';
import {SCREEN} from '../../types/screen';
import {useNavigation} from '../../utils/useNavigation';
import {CollectionListService} from '../../service/collectionList/collectionListService';
import {toast} from '../../utils/toast';

export const useListDetail = () => {
  const dispatch = useAppDispatch();
  const {navigate, params = {}} = useNavigation();
  const listDetail = useAppSelector(selectCollectionDetail);
  const listDetailState = useAppSelector(selectStateCollectionState);
  const {listId} = params as any;

  const onNavigateToMovieDetail = (movieId: number) => {
    navigate(SCREEN.MAIN_HOME, {
      screen: SCREEN.MOVIE_DETAIL,
      params: {movieId, from: SCREEN.LIST_DETAIL},
    });
  };

  const onNavigateToEditList = () => {
    navigate(SCREEN.LIST_FORM, {
      listId,
      from: SCREEN.LIST_DETAIL,
    });
  };

  const onDeleteList = async () => {
    try {
      await CollectionListService.deleteList(listId);
      toast('success', 'Successfully create new list');
      dispatch(getCollectionListAsync());
      navigate(SCREEN.LIST);
    } catch (err) {
    } finally {
    }
  };

  useEffect(() => {
    dispatch(getCollectionByIdAsync(listId));
  }, []);

  return {
    listDetail,
    loading: listDetailState === 'loading',
    onDeleteList,
    onNavigateToEditList,
    onNavigateToMovieDetail,
  };
};
