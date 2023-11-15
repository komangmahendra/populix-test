import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {
  getCollectionListAsync,
  selectCollectionList,
} from '../../store/collectionList/collectionList';
import {useNavigation} from '../../utils/useNavigation';
import {SCREEN} from '../../types/screen';

export const useMyList = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();
  const collectionList = useAppSelector(selectCollectionList);

  const onNavigateListItemDetail = (listId: number) => {
    navigate(SCREEN.MAIN_LIST, {
      screen: SCREEN.LIST_DETAIL,
      params: {listId},
    });
  };

  useEffect(() => {
    dispatch(getCollectionListAsync());
  }, []);

  return {
    collectionList,
    onNavigateListItemDetail,
  };
};
