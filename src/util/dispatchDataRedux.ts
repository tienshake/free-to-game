import {
  dispatchGameRelease,
  dispatchGameRelevance,
  dispatchGamePopularity,
} from 'features/games/GameApi';
import { fetchDataDispatch } from 'util/fetchDataDispatch';
import { RELEASE_DATE, RELEVANCE, POPULARITY } from 'constants/constants.d';

// dispatch and fetch data list game
const dispatchDataRedux = async (dispatch: any) => {
  const resRelease = await fetchDataDispatch(RELEASE_DATE);
  const resRelevance = await fetchDataDispatch(RELEVANCE);
  const resPopularity = await fetchDataDispatch(POPULARITY);
  if (resRelease && resRelevance && resPopularity) {
    dispatchGameRelease(dispatch, resRelease as any);
    dispatchGameRelevance(dispatch, resRelevance as any);
    dispatchGamePopularity(dispatch, resPopularity as any);
  }
};

export default dispatchDataRedux;
