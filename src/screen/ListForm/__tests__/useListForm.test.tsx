import {act, renderHook, waitFor} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import MockAdapter from 'axios-mock-adapter';

// hooks
import {useListForm} from '../useListForm';

// redux
import * as collectionListRedux from '../../../store/collectionList/collectionList';
import axios from '../../../config/axios';
import {CollectionListService} from '../../../service/collectionList/collectionListService';

const mockAxios = new MockAdapter(axios);

const mockNavigate = jest.fn();
const mockParams: {listId: number | null} = {listId: 1};
jest.mock('../../../utils/useNavigation', () => ({
  useNavigation: () => ({params: mockParams, navigate: mockNavigate}),
}));

const store = configureStore({
  reducer: function () {
    return {
      collectionList: {listDetail: {}},
    };
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

const Wrapper = ({children}: any) => (
  <Provider store={store}>{children}</Provider>
);

const mockToast = jest.fn();
jest.mock('../../../utils/toast', () => ({
  toast: () => mockToast,
}));
mockAxios.onPut(`${CollectionListService.baseURL}/4/list/1`).reply(200);
mockAxios.onPost(`${CollectionListService.baseURL}/4/list`).reply(200);

let mockGetListById: any;
describe('Test movie detail hooks', () => {
  beforeEach(() => {
    mockGetListById = jest.spyOn(collectionListRedux, 'getCollectionByIdAsync');
  });

  test('Should not call get list detail async when first init if does not has listId', () => {
    mockParams.listId = null;
    renderHook(() => useListForm(), {
      wrapper: Wrapper,
    });

    waitFor(() => expect(mockGetListById).toHaveBeenCalledTimes(0));
  });

  test('Should call get list detail async when first init with right listId', () => {
    mockParams.listId = 1;
    renderHook(() => useListForm(), {
      wrapper: Wrapper,
    });

    waitFor(() => expect(mockGetListById).toHaveBeenCalledTimes(1));
  });

  test('Should call api update list when onSave if has listId', async () => {
    mockParams.listId = 1;
    let spy = jest.spyOn(axios, 'put');

    const {result} = renderHook(() => useListForm(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.onChangeForm('Test', 'name');
    });

    await act(async () => {
      await result.current.onSave();
    });

    expect(mockGetListById).toHaveBeenCalledWith(1);
    expect(spy).toHaveBeenCalledWith(
      `${CollectionListService.baseURL}/4/list/1`,
      {
        description: '',
        iso_3166_1: 'US',
        iso_639_1: 'en',
        name: 'Test',
        public: false,
      },
    );
  });

  test('Should call api create new list when onSave if has not listId', async () => {
    mockParams.listId = null;
    let spy = jest.spyOn(axios, 'post');

    const {result} = renderHook(() => useListForm(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.onChangeForm('Test', 'name');
    });

    await act(async () => {
      await result.current.onSave();
    });

    expect(mockGetListById).toHaveBeenCalledWith(1);
    expect(spy).toHaveBeenCalledWith(
      `${CollectionListService.baseURL}/4/list`,
      {
        description: '',
        iso_3166_1: 'US',
        iso_639_1: 'en',
        name: 'Test',
        public: false,
      },
    );
  });
});
