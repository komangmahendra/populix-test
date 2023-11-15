import {useEffect, useState} from 'react';

// redux
import {
  getCollectionByIdAsync,
  getCollectionListAsync,
  selectCollectionDetail,
} from '../../store/collectionList/collectionList';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';

// hooks
import {useNavigation} from '../../utils/useNavigation';
import {CollectionListService} from '../../service/collectionList/collectionListService';
import {toast} from '../../utils/toast';
import {SCREEN} from '../../types/screen';
import {PayloadList} from '../../service/collectionList/interface';

export const useListForm = () => {
  const dispatch = useAppDispatch();
  const {params, navigate} = useNavigation();
  const listDetail = useAppSelector(selectCollectionDetail);
  const {listId} = params as any;

  const [listForm, setListForm] = useState({
    name: listDetail?.name || '',
    description: listDetail?.description || '',
  });
  const [loading, setLoading] = useState(false);

  const onChangeForm = (val: string, key: 'name' | 'description') => {
    setListForm(prev => ({...prev, [key]: val}));
  };

  const onSave = async () => {
    setLoading(true);
    try {
      const payload = {
        name: listForm.name,
        description: listForm.description,
        iso_3166_1: 'US',
        iso_639_1: 'en',
        public: false,
      };
      if (listId) {
        await CollectionListService.updateListDetail(
          listId,
          payload as PayloadList,
        );
        dispatch(getCollectionByIdAsync(listId));
      } else {
        await CollectionListService.createList(payload as PayloadList);
      }
      toast('success', 'Successfully create new list');
      dispatch(getCollectionListAsync());
      navigate(SCREEN.LIST);
    } catch (err: any) {
      toast('error', 'Failed create new list');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (listId) {
      dispatch(getCollectionByIdAsync(listId));
    }
  }, []);

  return {
    listDetail,
    listId,
    listForm,
    loading,
    onChangeForm,
    onSave,
  };
};
