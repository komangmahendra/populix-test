import axios from '../../config/axios';
import {USER_ACCOUNT} from '../../constant/account';

// types
import {Filter, ItemList, PayloadList} from './interface';

// total_pages

export class MovieService {
  static baseURL = 'https://api.themoviedb.org';

  static getMovieList = (filter?: Filter) => {
    return axios.get(`${this.baseURL}/3/discover/movie`, {params: filter});
  };

  static searchMovieList = () => {
    //api.themoviedb.org/3/search/movie
    // query : string

    return;
  };

  static getMovieGenre = () => {
    return axios.get(`${this.baseURL}/3/genre/movie/list`);
  };

  static getCollectionList = (filter?: Filter) => {
    return axios.get(`${this.baseURL}/4/account/${USER_ACCOUNT}/lists`, {
      params: filter,
    });
  };

  static getListDetail = (listId: number) => {
    return axios.get(`${this.baseURL}/4/list/${listId}`);
  };

  // list
  static createList = (payload: PayloadList) => {
    return axios.post(`${this.baseURL}/4/list`, payload);
  };

  static updateListDetail = (listId: number, payload: PayloadList) => {
    return axios.put(`${this.baseURL}/4/list/${listId}`, payload);
  };

  static deleteList = (listId: number) => {
    return axios.delete(`${this.baseURL}/4/list/${listId}`);
  };

  // item list
  static addItemsToList = (listId: number) => {
    return axios.post(`${this.baseURL}/4/list/${listId}/items`);
  };

  static updateItemsToList = (listId: number, payload: {items: ItemList[]}) => {
    return axios.put(`${this.baseURL}/4/list/${listId}/items`, payload);
  };

  static deleteItemsInList = (listId: number, payload: {items: ItemList[]}) => {
    return axios.delete(`${this.baseURL}/4/list/${listId}/items`, {
      data: payload,
    });
  };

  static clearItemsInList = (listId: number) => {
    return axios.get(`${this.baseURL}/4/list/${listId}/clear`);
  };
}
