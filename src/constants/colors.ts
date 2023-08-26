import {DefaultTheme, DarkTheme, ExtendedTheme} from '@react-navigation/native';

/**
 * this will hold every color in the application
 */
const COLORS = {
  primary: '#1C1E3C',
  secondary: '#ED6A46',
  lightGray: '#F5F3F3',
  white: '#fff',
  light1: '#fafafa',
  light2: '#F3F4F5',
  light3: '#eeeeee',
  dark1: '#121418',
  dark2: '#1B1F24',
  dark3: '#22272E',
  gray: '#757575',
};
const CommonColors = {
  alert: '#DC3545',
  success: '#198754',
  warning: '#FFC107',
};

const ColorsLight = {
  primary: COLORS.primary,
  background: COLORS.lightGray,
  backgroundSecondary: COLORS.primary,
  backgroundTertiary: COLORS.secondary,
  primaryText: COLORS.dark2,
  lightGray: COLORS.lightGray,
  text: COLORS.dark2,
  white: COLORS.white,
  gray: COLORS.gray,
};

const ColorsDark = {
  ...ColorsLight,
  background: COLORS.dark2,
  primaryText: COLORS.light1,
  text: COLORS.white,
};

export const MyLightTheme: ExtendedTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...CommonColors,
    ...ColorsLight,
  },
};

export const MyDarkTheme: ExtendedTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...CommonColors,
    ...ColorsDark,
  },
};
export interface ExtendedThemeType {
  dark: boolean;
  colors: {
    alert: string;
    success: string;
    warning: string;
    background: string;
    border: string;
    card: string;
    notification: string;
    primary: string;
    text: string;
    backgroundSecondary: string;
    backgroundTertiary: string;
    primaryText: string;
    lightGray: string;
    white: string;
    gray: string;
  };
}
