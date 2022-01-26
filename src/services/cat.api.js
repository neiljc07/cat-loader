import axios from 'axios';
import * as Endpoints from '../constants/endpoints';

export function getBreeds() {
  return axios.get(Endpoints.BREEDS);
}

export function getByBreed(id, page = 0, limit = 10, orderBy = 'Asc') {
  return axios.get(Endpoints.SEARCH_BY_BREED + `?breed_id=${id}&page=${page}&limit=${limit}&order=${orderBy}`);
}