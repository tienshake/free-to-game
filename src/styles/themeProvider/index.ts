import theme from 'styled-theming';
import { CONSTANTS } from 'constants/constants.d';
import {
  secondaryColor,
  hoverColorWhite,
  subColor,
  gradientBackGroundColorLight,
  gradientBackGroundColorDark,
  primaryColor,
  primaryTextColor,
  whiteColor,
  black_1,
  secondaryTextColor,
} from 'styles/theme';

export const backgroundColor = theme(CONSTANTS.THEME, {
  light: `${whiteColor}`,
  dark: `${primaryColor}`,
});

export const textColor = theme(CONSTANTS.THEME, {
  light: `${black_1}`,
  dark: `${primaryTextColor}`,
});

export const textHoverColor = theme(CONSTANTS.THEME, {
  light: `${secondaryTextColor}`,
  dark: `${whiteColor}`,
});

export const backgroundHoverColor = theme(CONSTANTS.THEME, {
  light: `${hoverColorWhite}`,
  dark: `${black_1}`,
});

export const backgroundMenuSubColor = theme(CONSTANTS.THEME, {
  light: `${whiteColor}`,
  dark: `${subColor}`,
});

export const cardMenuColor = theme(CONSTANTS.THEME, {
  light: `${whiteColor}`,
  dark: `${secondaryColor}`,
});

export const CommunityItemColor = theme(CONSTANTS.THEME, {
  light: `${whiteColor}`,
  dark: `${black_1}`,
});

export const gradientColor = theme(CONSTANTS.THEME, {
  light: `${gradientBackGroundColorLight}`,
  dark: `${gradientBackGroundColorDark}`,
});
