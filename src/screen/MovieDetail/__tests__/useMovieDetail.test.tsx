import {act, renderHook} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
// hooks
import {useMovieDetail} from '../useMovieDetail';

// redux
import * as movieSliceRedux from '../../../store/movie/discoverMovieSlice';

const mockNavigate = jest.fn();
jest.mock('../../../utils/useNavigation', () => ({
  useNavigation: () => ({params: {movieId: 1}, navigate: mockNavigate}),
}));

const store = configureStore({
  reducer: function () {
    return {
      discoverMovie: {movieDetail: {}},
    };
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export const Wrapper = ({children}: any) => (
  <Provider store={store}>{children}</Provider>
);

describe('Test movie detail hooks', () => {
  test('Should call get movie detail async when first init with right movieId', () => {
    const mockThunkGetMovieByIdAsync = jest.spyOn(
      movieSliceRedux,
      'getMovieByIdAsync',
    );

    renderHook(() => useMovieDetail(), {
      wrapper: Wrapper,
    });
    expect(mockThunkGetMovieByIdAsync).toHaveBeenCalledWith(1);
  });

  test('Should call mock navigate when call onNavigateToList with right params', () => {
    const {result} = renderHook(() => useMovieDetail(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.onNavigateToList();
    });

    expect(mockNavigate).toHaveBeenCalledWith('MainList', {
      params: {from: 'MovieDetail', movieId: 1},
      screen: 'List',
    });
  });
});
