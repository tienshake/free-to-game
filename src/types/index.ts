// language
export type LanguageState = {
  language: string;
};
//PayLoadActionType
export type PayloadType = 'VI' | 'EN';

// Route
export interface RouteType {
  component: () => JSX.Element;
  patch: string;
  noneBanner?: boolean;
}

//Games
export type Game = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url?: string;
  genre?: string;
  platform?: string;
  publisher?: string;
  developer?: string;
  release_date?: string;
  freetogame_profile_url?: string;
};

export type System = {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
};

export type Screenshots = {
  id?: number;
  image?: string;
};

export type GameDetails = {
  id?: number;
  title?: string;
  thumbnail?: string;
  short_description?: string;
  description?: string;
  game_url?: string;
  genre?: string;
  platform?: string;
  publisher?: string;
  developer?: string;
  release_date?: string;
  freetogame_profile_url?: string;
  minimum_system_requirements?: System;
  screenshots?: Screenshots[] | undefined;
};

export type Games = {
  gamesRelease: Array<Game>;
  gamesRelevance: Array<Game>;
  gamesPopularity: Array<Game>;
  gamesFilter: Array<Game>;
  loading?: boolean;
};

//Filter
export type Filter = {
  platform: string;
  genre?: string;
  tag?: string;
  sortBy: string;
};
