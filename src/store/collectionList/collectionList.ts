import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

// service
import {CollectionListService} from '../../service/collectionList/collectionListService';

// types
import {RootState} from '..';
import {collectionListKeys, collectionListPrefix} from './collectionListKeys';
import {
  CollectionListDetail,
  CollectionListItem,
} from '../../service/collectionList/interface';

export interface CollectionListState {
  collectionList: CollectionListItem[];
  listDetail: CollectionListDetail | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CollectionListState = {
  collectionList: [],
  listDetail: null,
  status: 'idle',
};

export const getCollectionListAsync = createAsyncThunk(
  collectionListKeys.fetchList,
  async () => {
    const response = await CollectionListService.getCollectionList();
    return response.data || {};
  },
);

export const getCollectionByIdAsync = createAsyncThunk(
  collectionListKeys.fetchById,
  async (listId: number) => {
    const response = await CollectionListService.getListDetail(listId);
    return response.data || {};
  },
);

export const collectionListSlice = createSlice({
  name: collectionListPrefix,
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: builder => {
    builder
      .addCase(getCollectionListAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(getCollectionListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.collectionList = action.payload?.results || [];
      })
      .addCase(getCollectionListAsync.rejected, state => {
        state.status = 'failed';
      })
      .addCase(getCollectionByIdAsync.pending, state => {
        state.status = 'loading';
        state.listDetail = null;
      })
      .addCase(getCollectionByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.listDetail = action.payload || null;
      })
      .addCase(getCollectionByIdAsync.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const selectCollectionList = (state: RootState) =>
  state.collectionList.collectionList;
export const selectCollectionDetail = (state: RootState) =>
  state.collectionList.listDetail;
export const selectStateCollectionState = (state: RootState) =>
  state.collectionList.status;

export default collectionListSlice.reducer;
