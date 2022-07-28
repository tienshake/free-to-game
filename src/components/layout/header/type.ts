import { IconDropDown } from './style';
import { GENRES_ALL, GENRES_BROWSER } from 'constants/constants.d';
export type headerType = {
  title: string;
  icon?: any;
  type?: string;
};

export const headers: headerType[] = [
  { title: 'free-games', icon: IconDropDown, type: GENRES_ALL },
  { title: 'browser-games', icon: IconDropDown, type: GENRES_BROWSER },
  { title: 'special-offer' },
  { title: 'top' },
];
