import axios from 'axios';
import configs from '../config.json';
import * as ENDPOINTS from '../constants/endpoints';

export function getCategories() {
  axios
    .get(configs.CAT_API_URL + ENDPOINTS.CAT.breeds)
    .then(res => {
      const categories = res.data;

      console.log(categories);
    })
    .catch(err => {
      console.log(err);
    });
}