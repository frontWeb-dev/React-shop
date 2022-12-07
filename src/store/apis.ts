import axios from 'axios';
import { selectorFamily } from 'recoil';

const BASE_URL = 'https://fakestoreapi.com';

const Api = axios.create({});

export const getProducts = selectorFamily({
  key: 'getAllItems',
  get: (id: string) => async () => {
    const response = await Api.get(`${BASE_URL}/${id}`);
    const result = await response.data;
    return result;
  },
});
