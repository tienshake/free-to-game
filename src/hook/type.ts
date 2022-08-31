import { Game } from 'types/index';
export type Filter = {
  platform?: string | null;
  genre?: string | null;
  tag?: string;
  sortBy?: string;
};

export type Response = {
  games: Game[];
  error: string;
  isLoading: boolean;
};
