import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Games, Game } from 'types';

const initialState: Games = {
  gamesRelease: [],
  gamesRelevance: [],
  gamesPopularity: [],
  gamesFilter: [],
  loading: true,
};

export const GameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    getGameRelease: (state: Games, action: PayloadAction<Game[]>) => {
      state.gamesRelease = action.payload;
      state.loading = false;
    },
    getGameRelevance: (state: Games, action: PayloadAction<Game[]>) => {
      state.gamesRelevance = action.payload;
      state.loading = false;
    },
    getGamePopularity: (state: Games, action: PayloadAction<Game[]>) => {
      state.gamesPopularity = action.payload;
      state.loading = false;
    },
  },
});

export const { getGameRelevance, getGameRelease, getGamePopularity } =
  GameSlice.actions;

export default GameSlice.reducer;
