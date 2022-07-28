import { EN, VI } from 'constants/constants.d';
import en from 'translations/en.json';
import vi from 'translations/vi.json';

export const translate = (key: string, language: string): string => {
  let langData: { [key: string]: string } = {};

  if (language === EN) {
    langData = en;
  } else if (language === VI) {
    langData = vi;
  }

  return langData[key];
};
