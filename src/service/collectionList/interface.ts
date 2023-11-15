import {MovieType} from '../movie/interface';

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

export type CollectionListItem = {
  account_object_id: string;
  adult: number;
  average_rating: number;
  backdrop_path: null | string;
  created_at: string;
  description: string;
  featured: null;
  id: number;
  iso_3166_1: 'US';
  iso_639_1: 'en';
  name: 'string';
  number_of_items: number;
  poster_path: null | string;
  public: boolean;
  revenue: number;
  runtime: string;
  sort_by: number;
  updated_at: string;
};

export type CollectionListDetail = CollectionListItem & {
  average_rating: number;
  backdrop_path: null | string;
  results: MovieType[];
  comments: {
    [key: string]: null | string;
  };
  created_by: {
    avatar_path: null | string;
    gravatar_hash: string;
    id: string;
    name: string;
    username: string;
  };
};
