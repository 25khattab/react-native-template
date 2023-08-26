import '@react-navigation/native';
import {ExtendedThemeType} from '@/constants/colors';

// Override the theme in react native navigation to accept our custom theme props.
declare module '@react-navigation/native' {
  export type ExtendedTheme = ExtendedThemeType;
  export function useTheme(): ExtendedTheme;
}
