import {renderHook} from '@testing-library/react-native';
import {useMovieDetail} from '../useMovieDetail';
import {Wrapper} from './Wrapper.test';
import * as movieSliceRedux from '../../../store/movie/discoverMovieSlice';

jest.mock('../../../utils/useNavigation', () => ({
  useNavigation: () => ({params: {movieId: 1}}),
}));

describe('Test movie detail hooks', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('Should call get movie detail async when first init', () => {
    jest.spyOn(movieSliceRedux, 'getMovieByIdAsync').mockResolvedValueOnce({});

    const {result} = renderHook(() => useMovieDetail(), {wrapper: Wrapper});
    //  expect(mockGetMovieByIdAsync).toHaveBeenCalledWith();
  });
});
