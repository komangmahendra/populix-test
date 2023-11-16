import React from 'react';
import {MovieDetail} from '../MovieDetail';
import {render} from '@testing-library/react-native';
import {convertTimeToHoursFormat} from '../../../utils/convertTimeToHoursFormat';

const mockMovieDetail = {
  adult: false,
  backdrop_path: '/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg',
  belongs_to_collection: null,
  budget: 14500000,
  genres: [
    {id: 28, name: 'Action'},
    {id: 18, name: 'Drama'},
  ],
  homepage: 'https://www.soundoffreedommovie.com/',
  id: 678512,
  imdb_id: 'tt7599146',
  original_language: 'en',
  original_title: 'Sound of Freedom',
  overview:
    'The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.',
  popularity: 783.527,
  poster_path: '/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg',
  production_companies: [
    {id: 90508, logo_path: null, name: 'Santa Fe Films', origin_country: 'US'},
  ],
  production_countries: [{iso_3166_1: 'US', name: 'United States of America'}],
  release_date: '2023-07-03',
  revenue: 246728260,
  runtime: 131,
  spoken_languages: [
    {english_name: 'Spanish', iso_639_1: 'es', name: 'Español'},
    {english_name: 'English', iso_639_1: 'en', name: 'English'},
  ],
  status: 'Released',
  tagline: 'Fight for the light. Silence the darkness.',
  title: 'Sound of Freedom',
  video: false,
  vote_average: 8.087,
  vote_count: 1427,
};

const mockNavigateToList = jest.fn();
jest.mock('../useMovieDetail', () => ({
  useMovieDetail: () => ({
    movieDetail: mockMovieDetail,
    onNavigateToList: mockNavigateToList,
  }),
}));

jest.mock('../../../components/TopBar', () => ({
  TopBar: 'TopBar',
}));

describe('Test movie detail', () => {
  test('Component should render properly ', () => {
    const {getByText} = render(<MovieDetail />);
    expect(getByText(mockMovieDetail.title)).toBeTruthy();
    expect(getByText(mockMovieDetail.overview)).toBeTruthy();
    const time = convertTimeToHoursFormat(mockMovieDetail.runtime);
    expect(getByText(`${time.h}.${time.m} hours`)).toBeTruthy();
  });
});
