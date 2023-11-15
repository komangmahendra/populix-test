import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {
  getCollectionByIdAsync,
  getCollectionListAsync,
  selectCollectionList,
} from '../../store/collectionList/collectionList';
import {useNavigation} from '../../utils/useNavigation';
import {SCREEN} from '../../types/screen';
import {CollectionListService} from '../../service/collectionList/collectionListService';

export const useList = () => {
  const dispatch = useAppDispatch();
  const {navigate, params} = useNavigation();
  const collectionList = useAppSelector(selectCollectionList);
  const {movieId} = params;

  const [loading, setLoading] = useState(false);

  const onNavigateListItemDetail = (listId: number) => {
    navigate(SCREEN.MAIN_LIST, {
      screen: SCREEN.LIST_DETAIL,
      params: {listId},
    });
  };

  const onPickListItem = async (listId: number) => {
    try {
      setLoading(true);
      await CollectionListService.addItemsToList(listId, {
        items: [{media_id: movieId, media_type: 'movie'}],
      });
      await dispatch(getCollectionListAsync());
      await dispatch(getCollectionByIdAsync(listId));
      navigate(SCREEN.LIST_DETAIL, {listId});
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const onNavigateToListForm = () => {
    navigate(SCREEN.LIST_FORM);
  };

  const onNavigateToHome = () => {
    navigate(SCREEN.HOME);
  };

  useEffect(() => {
    dispatch(getCollectionListAsync());
  }, []);

  return {
    collectionList,
    loading,
    movieId,
    onNavigateToHome,
    onPickListItem,
    onNavigateToListForm,
    onNavigateListItemDetail,
  };
};
