import React from 'react';
import { Game } from './../types/index';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  dispatchGameRelease,
  dispatchGameRelevance,
  dispatchGamePopularity,
} from 'features/games/GameApi';
import { fetchDataDispatch } from 'util/fetchDataDispatch';
import { RELEASE_DATE, RELEVANCE, POPULARITY } from 'constants/constants';

// dispatch and fetch data list game
const dispatchDataRedux = async (
  dispatch: React.Dispatch<PayloadAction<Game[]>>,
) => {
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
