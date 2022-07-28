import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reduxReducer from 'features/language/LanguageSlice';
import LightOfDarkReducer from 'features/actionHeader';
import gamesReducer from 'features/games/GameSlice';

export const store = configureStore({
  reducer: {
    lang: reduxReducer,
    games: gamesReducer,
    actionHeader: LightOfDarkReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
