import axiosClient from './axiosClient';
import _ from 'lodash';
import { PATCH } from 'constants/constants.d';

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
