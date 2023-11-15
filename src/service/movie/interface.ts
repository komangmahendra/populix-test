export type Filter = {
  page: number;
};

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: 'en';
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export enum MovieGenreEnum {
  ACTION = 'Action',
  ADVENTURE = 'Adventure',
  ANIMATION = 'Animation',
  COMEDY = 'Comedy',
  CRIME = 'Crime',
  DOCUMENTARY = 'Documentary',
  DRAMA = 'Drama',
  FAMILY = 'Family',
  FANTASY = 'Fantasy',
  HISTORY = 'History',
  HORROR = 'Horror',
  MUSIC = 'Music',
  MYSTERY = 'Mystery',
  ROMANCE = 'Romance',
  SCIENCE_FICTION = 'Science Fiction',
  TV_MOVIE = 'TV Movie',
  THRILLER = 'Thriller',
  WAR = 'War',
  WESTERN = 'Western',
}

export type MovieGenre = {
  id: number;
  name: MovieGenreEnum;
};

export type MovieProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

export type MovieDetail = {
  adult: boolean;
  backdrop_path: string | null;
  budget: number;
  genres: MovieGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: 'en';
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: MovieProductionCompany[];
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};
