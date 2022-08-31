import { API_HOST, API_KEY, STATUS_SUCCESS } from 'constants/constants';
import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: `https://${API_HOST}/api`,
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST,
  },
  paramsSerializer: (params) => queryString.stringify({ ...params }),
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.status === STATUS_SUCCESS) {
      return response.data;
    } else {
      return {};
    }
  },
  (error) => {
    throw error;
  },
);

export default axiosClient;
