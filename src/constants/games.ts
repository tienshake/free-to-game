export type typeListGame = {
  value: string;
  display: string;
  displayVi?: string;
};

export const PLATFORMS = [
  {
    value: 'browser',
    display: 'Browser (Web)',
  },
  {
    value: 'pc',
    display: 'Windows (PC)',
  },
];

export const GENRES_ARR = [
  {
    value: 'mmo',
    displayVi: 'Game Online',
    display: 'MMO',
  },
  {
    value: 'mmorpg',
    display: 'MMORPG',
    displayVi: 'Game nhập vai',
  },
  {
    value: 'shooter',
    display: 'Shooter',
    displayVi: 'Bắn súng',
  },
  {
    value: 'strategy',
    display: 'Strategy',
    displayVi: 'Chiến lược',
  },
  {
    value: 'moba',
    display: 'Moba',
    displayVi: 'Moba',
  },
  {
    value: 'card',
    display: 'Card Games',
    displayVi: 'Thẻ Bài',
  },
  {
    value: 'racing',
    display: 'Racing',
    displayVi: 'Đua xe',
  },
  {
    value: 'sports',
    display: 'Sports',
    displayVi: 'Thể thao',
  },
  {
    value: 'social',
    display: 'Social',
    displayVi: 'Xã hội',
  },
];

export const GENRES_BROWSER_ARR = [
  {
    value: 'mmorpg',
    display: 'MMORPG',
    displayVi: 'Game nhập vai ',
  },
  {
    value: 'shooter',
    display: 'Shooter',
    displayVi: 'Bắn súng',
  },
  {
    value: 'strategy',
    display: 'Strategy',
    displayVi: 'Chiến lược',
  },
  {
    value: 'racing',
    display: 'Racing',
    displayVi: 'Đua xe',
  },
  {
    value: 'sports',
    display: 'Sports',
    displayVi: 'Thể thao',
  },
  {
    value: 'social',
    display: 'Social',
    displayVi: 'Xã hội',
  },
];

export const TAGS = [
  {
    value: 'mmofps',
    display: 'MMOFPS',
  },
  {
    value: 'action-rpg',
    display: 'Action RPG',
  },
  {
    value: 'sandbox',
    display: 'Sandbox',
  },
  {
    value: 'open-world',
    display: 'Open World',
  },
  {
    value: 'survival',
    display: 'Survival',
  },
  {
    value: 'battle-royale',
    display: 'Battle Royale',
  },
  {
    value: 'mmotps',
    display: 'MMOTPS',
  },
  {
    value: 'anime',
    display: 'Anime',
  },
  {
    value: 'pvp',
    display: 'PvP',
  },
  {
    value: 'pve',
    display: 'PvE',
  },
  {
    value: 'fantasy',
    display: 'Fantasy',
  },
  {
    value: 'sci-fi',
    display: 'Sci-Fi',
  },
];

export const SORT_BY = [
  {
    value: 'relevance',
    display: 'Relevance',
  },
  {
    value: 'popularity',
    display: 'Popularity',
  },
  {
    value: 'release-date',
    display: 'Release Date',
  },
  {
    value: 'alphabetical',
    display: 'Alphabetical',
  },
];
