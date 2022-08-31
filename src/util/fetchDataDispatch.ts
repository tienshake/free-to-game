import axios from 'axios';
import { API_HOST, API_KEY, STATUS_SUCCESS } from 'constants/constants';

export const fetchDataDispatch = (sortBy: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get('/games', {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
        params: {
          'sort-by': sortBy,
        },
      });
      if (res && res.status === STATUS_SUCCESS) {
        resolve(res.data);
      }
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
