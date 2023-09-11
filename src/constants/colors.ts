import { DarkTheme, DefaultTheme } from "@react-navigation/native";

/**
 * this will hold every color in the application
 */
const COLORS = {
  primary: '#1C1E3C',
  secondary: '#ED6A46',
  gray: '#757575',
  black: '#000000',
  white: '#FFFFFF',
  lightGray1: '#F5F5F5',
  lightGray2: '#F0EFEE',
  lightGray3: '#D4D4D4',
  lightGray4: '#A3A3A3',
  darkGray1: '#2E2E2E',
  darkGray2: '#1E1E1E',
  darkGray3: '#121212',
};
const CommonColors = {
  alert: '#DC3545',
  success: '#198754',
  warning: '#FFC107',
};

const ColorsLight = {
  ...CommonColors,
  gray: '#757575',
  black: '#000000',
  white: '#FFFFFF',
  lightGray1: '#F5F5F5',
  lightGray2: '#F0EFEE',
  lightGray3: '#D4D4D4',
  lightGray4: '#A3A3A3',
  darkGray1: '#2E2E2E',
  darkGray2: '#1E1E1E',
  darkGray3: '#121212',
  primary: COLORS.primary,
  secondary: COLORS.secondary,
  background: COLORS.lightGray1,
  backgroundSecondary: COLORS.primary,
  backgroundTertiary: COLORS.secondary,
  text: COLORS.darkGray2,
  lighterText: COLORS.darkGray1,
  border: COLORS.darkGray3,
};

const ColorsDark = {
  ...ColorsLight,
  background: COLORS.darkGray3,
  text: COLORS.lightGray2,
  lighterText: COLORS.lightGray4,
  border: COLORS.lightGray2,
};

export const MyLightTheme:ExtendedThemeType = {
  dark: false,
  colors: {...DefaultTheme["colors"] , ...ColorsLight},
};

export const MyDarkTheme:ExtendedThemeType = {
  dark: true,
  colors: {
    ...DarkTheme["colors"] ,
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
    backgroundSecondary: string;
    backgroundTertiary: string;
    primary: string;
    secondary: string;
    text: string;
    lighterText: string;
    border: string;
    gray: string;
    black: string;
    white: string;
    lightGray1: string;
    lightGray2: string;
    lightGray3: string;
    lightGray4: string;
    darkGray1: string;
    darkGray2: string;
    darkGray3: string;
    card:string;
    notification:string;
  };
}
