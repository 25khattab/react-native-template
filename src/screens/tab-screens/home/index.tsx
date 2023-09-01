import {useNavigation, useTheme} from '@react-navigation/native';
import {Button, StyleSheet, useColorScheme} from 'react-native';
import {useTranslation} from 'react-i18next';

import Text from '@/components/core/Text';
import View from '@/components/core/View';
import {ExtendedThemeType} from '@/constants/colors';
import {SIZES} from '@/constants/spacing';
import {useAuth, useLayout} from '@/features';

export const Home = () => {
  const {navigate} = useNavigation();
  const {colors} = useTheme();
  const isRTL = useLayout((state) => state.RTL);
  const styles = generateStyles(isRTL, colors);
  const signOut = useAuth((s) => s.signOut);
  const layout = useLayout();
  const scheme = useColorScheme();
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t('hello')}</Text>
      <Button
        title="navigate to settings"
        onPress={() => navigate('Settings')}
      />
      <Button title="sign out" onPress={() => signOut()} />
      <Button
        title="change language"
        onPress={() => layout.setLanguage(layout.lang === 'ar' ? 'en' : 'ar')}
      />
      <Button
        title="change theme"
        onPress={() =>
          layout.setTheme(
            (layout.theme === 'system' && scheme === 'dark') ||
              layout.theme === 'dark'
              ? 'light'
              : 'dark',
          )
        }
      />
    </View>
  );
};

const generateStyles = (isRTL: boolean, color: ExtendedThemeType['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: SIZES.medium,
      rowGap: SIZES.large,
    },
  });
