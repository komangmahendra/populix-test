import {store} from '../..';
import {
  getCollectionByIdAsync,
  getCollectionListAsync,
} from '../collectionList';
import axios from '../../../config/axios';
import MockAdapter from 'axios-mock-adapter';
import {CollectionListService} from '../../../service/collectionList/collectionListService';
import {USER_ACCOUNT} from '../../../constant/account';
import {collectionListKeys} from '../collectionListKeys';

const mockList = [
  {
    account_object_id: '5d0c59d0c3a3680c431e1d3b',
    adult: 0,
    average_rating: 7.7,
    backdrop_path: null,
    created_at: '2023-11-15 14:24:22 UTC',
    description: 'COBS',
    featured: 0,
    id: 1,
    iso_3166_1: 'US',
    iso_639_1: 'en',
    name: 'Test 11',
    number_of_items: 5,
    poster_path: null,
    public: 1,
    revenue: 1625766545,
    runtime: '631',
    sort_by: 1,
    updated_at: '2023-11-15 15:46:46 UTC',
  },
];

const mockDetail = {
  average_rating: 8.3,
  backdrop_path: null,
  comments: {'movie:28': null},
  created_by: {
    avatar_path: null,
    gravatar_hash: '474e0a26b23992075153892f7ec1bfe6',
    id: '5d0c59d0c3a3680c431e1d3b',
    name: '',
    username: 'test',
  },
  description: '',
  id: 8279017,
  iso_3166_1: 'US',
  iso_639_1: 'en',
  item_count: 1,
  name: 'Test 2',
  object_ids: {},
  page: 1,
  poster_path: null,
  public: true,
  results: [
    {
      adult: false,
      backdrop_path: '/9Qs9oyn4iE8QtQjGZ0Hp2WyYNXT.jpg',
      genre_ids: [],
      id: 28,
      media_type: 'movie',
      original_language: 'en',
      original_title: 'Apocalypse Now',
      overview:
        'At the height of the Vietnam war, Captain Benjamin Willard is sent on a dangerous mission that, officially, "does not exist, nor will it ever exist." His goal is to locate - and eliminate - a mysterious Green Beret Colonel named Walter Kurtz, who has been leading his personal army on illegal guerrilla missions into enemy territory.',
      popularity: 45.62,
      poster_path: '/gQB8Y5RCMkv2zwzFHbUJX3kAhvA.jpg',
      release_date: '1979-08-15',
      title: 'Apocalypse Now',
      video: false,
      vote_average: 8.285,
      vote_count: 7586,
    },
  ],
  revenue: 150000000,
  runtime: 147,
  sort_by: 'original_order.asc',
  total_pages: 1,
  total_results: 1,
};

const mockAxios = new MockAdapter(axios);

describe('Test collection list', () => {
  beforeAll(() => {
    mockAxios
      .onGet(`${CollectionListService.baseURL}/4/account/${USER_ACCOUNT}/lists`)
      .reply(200, mockList);

    mockAxios
      .onGet(`${CollectionListService.baseURL}/4/list/1`)
      .reply(200, mockDetail);
  });

  test('Should get empty list when first init', () => {
    const state = store.getState().collectionList;
    expect(state.collectionList).toEqual([]);
  });

  test('Should be able to fetch the list', async () => {
    const result = await store.dispatch(getCollectionListAsync());
    const list = result.payload;

    expect(result.type).toBe(`${collectionListKeys.fetchList}/fulfilled`);
    expect(list).toEqual(mockList);
  });

  test('Should be able to fetch the detail list', async () => {
    const result = await store.dispatch(getCollectionByIdAsync(1));
    const detail = result.payload;

    expect(result.type).toBe(`${collectionListKeys.fetchById}/fulfilled`);
    expect(detail).toEqual(mockDetail);
  });
});
