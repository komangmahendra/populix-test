export type PayloadList = {
  name: string;
  description: string;
  public: boolean;
};

export type ItemList = {
  media_type: 'movie' | 'TV';
  media_id: number;
  comment?: string;
};

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
