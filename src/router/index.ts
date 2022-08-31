import { RouteType } from 'types';
import Home from 'page/home';
import Games from 'page/games';
import Detail from 'page/detail';

export const publicRoute: RouteType[] = [
  { component: Home, patch: '/free-to-game' },
  { component: Games, patch: '/games', noneBanner: true },
  { component: Detail, patch: '/game', noneBanner: true },
];
