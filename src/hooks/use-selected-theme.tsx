import { useLayout } from '@/features';
import { useColorScheme } from 'react-native';
import { MyDarkTheme, MyLightTheme } from '@/constants/colors';

export const useSelectedTheme = () => {
  const theme = useLayout((state) => state.theme);
  const scheme = useColorScheme();
  const darkTheme = Boolean(
    (theme === 'system' && scheme === 'dark') || theme === 'dark',
  );

  const colors = darkTheme ? MyDarkTheme["colors"] : MyLightTheme["colors"]
  const isDark = darkTheme
  return { colors, isDark} as const;
};
