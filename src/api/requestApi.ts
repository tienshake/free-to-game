import axiosClient from './axiosClient';
import { PATCH } from 'constants/constants';
import _ from 'lodash';

const requestApi = {
  getGame: async (id: string | null) => {
    let data = {};
    const res = await axiosClient.get(PATCH.GAME, {
      params: { id: id },
    });
    if (!_.isEmpty(res)) {
      data = res;
    }
    return data;
  },
};

export default requestApi;
