import axios from 'axios';
import configs from '../config.json';
import * as ENDPOINTS from '../constants/endpoints';

export function getBreeds() {
  return axios.get(configs.CAT_API_URL + ENDPOINTS.CAT.breeds);
}