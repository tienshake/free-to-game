import { PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import { Game } from 'types/index';
import {
  getGameRelease,
  getGameRelevance,
  getGamePopularity,
  getGameFilter,
} from './GameSlice';

const dispatchGameRelease = async (
  dispatch: React.Dispatch<PayloadAction<Game[]>>,
  data: Game[],
) => {
  dispatch(getGameRelease(data));
};

const dispatchGameRelevance = (
  dispatch: React.Dispatch<PayloadAction<Game[]>>,
  data: Game[],
) => {
  dispatch(getGameRelevance(data));
};

const dispatchGamePopularity = (
  dispatch: React.Dispatch<PayloadAction<Game[]>>,
  data: Game[],
) => {
  dispatch(getGamePopularity(data));
};

const dispatchGameFilter = (
  dispatch: React.Dispatch<PayloadAction<Game[]>>,
  data: Game[],
) => {
  dispatch(getGameFilter(data));
};

export {
  dispatchGameRelease,
  dispatchGameRelevance,
  dispatchGamePopularity,
  dispatchGameFilter,
};
