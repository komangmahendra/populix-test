import {renderHook} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
// hooks
import {useListForm} from '../useListForm';

// redux
import * as collectionListRedux from '../../../store/collectionList/collectionList';

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

export const Wrapper = ({children}: any) => (
  <Provider store={store}>{children}</Provider>
);

const mockToast = jest.fn();
jest.mock('../../../utils/toast', () => ({
  toast: mockToast,
}));

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
    expect(mockGetListById).toHaveBeenCalledTimes(0);
  });

  test('Should call get list detail async when first init with right listId', () => {
    mockParams.listId = 1;
    renderHook(() => useListForm(), {
      wrapper: Wrapper,
    });
    expect(mockGetListById).toHaveBeenCalledWith(1);
  });

  // test('Should call mock navigate when call onNavigateToList with right params', () => {
  //   const {result} = renderHook(() => useListForm(), {
  //     wrapper: Wrapper,
  //   });

  //   act(() => {
  //     result.current.onNavigateToList();
  //   });

  //   expect(mockNavigate).toHaveBeenCalledWith('MainList', {
  //     params: {from: 'MovieDetail', movieId: 1},
  //     screen: 'List',
  //   });
  // });
});
