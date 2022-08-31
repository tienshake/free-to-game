import React from 'react';
import { Game } from 'types';
import { Filter, Response } from './type';
import { STATUS_SUCCESS, API_HOST, API_KEY, PATCH } from 'constants/constants';
import axios from 'axios';
import _ from 'lodash';

const useFetch = (params: Filter): Response => {
  const { platform, genre, tag, sortBy } = params;
  const [games, setGames] = React.useState<Game[]>([]);
  const [err, setErr] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!_.isEmpty(params)) {
      setIsLoading(true);
      let urlFetch = PATCH.GAMES;
      if (tag) {
        urlFetch = PATCH.FILTER;
      }
      const options = {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
        params: {
          platform: platform,
          category: genre,
          tag: tag,
          'sort-by': sortBy,
        },
      };
      axios
        .get(urlFetch, options)
        .then((res) => {
          if (res && res.status === STATUS_SUCCESS) {
            setGames(res.data);
            setIsLoading(false);
          }
        })
        .catch((e) => setErr(e.message));
    }
  }, [platform, genre, tag, sortBy, params]);

  return {
    games,
    error: err,
    isLoading: isLoading,
  };
};

export default useFetch;
