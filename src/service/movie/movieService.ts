import axios from '../../config/axios';

// types
import {Filter} from './interface';

// total_pages

export class MovieService {
  static baseURL = 'https://api.themoviedb.org';

  static getMovieList = (filter?: Filter) => {
    return axios.get(`${this.baseURL}/3/discover/movie`, {params: filter});
  };

  static getMovieDetail = (movieId: number) => {
    return axios.get(`${this.baseURL}/3/movie/${movieId}`);
  };

  static getMovieGenre = () => {
    return axios.get(`${this.baseURL}/3/genre/movie/list`);
  };

  static getListDetail = (listId: number) => {
    return axios.get(`${this.baseURL}/4/list/${listId}`);
  };
}
