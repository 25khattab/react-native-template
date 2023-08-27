import {useNavigation, useTheme} from '@react-navigation/native';
import {Button, StyleSheet, useColorScheme} from 'react-native';
import {useTranslation} from 'react-i18next';

import Text from '@/components/core/Text';
import View from '@/components/core/View';
import {ExtendedThemeType} from '@/constants/colors';
import {SIZES} from '@/constants/spacing';
import {useAppDispatch, useAppSelector} from '@/hooks/redux-hooks';
import {removeCredentials} from '@/features/auth';
import {setLang, setTheme} from '@/features/layout';

export const Home = () => {
  const {navigate} = useNavigation();
  const {colors} = useTheme();
  const isRTL = useAppSelector((state) => state.layout.RTL);
  const dispatch = useAppDispatch();
  const styles = generateStyles(isRTL, colors);
  const scheme = useColorScheme();
  const lang = useAppSelector((state) => state.layout.lang);
  const theme = useAppSelector((state) => state.layout.theme);
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t('hello')}</Text>
      <Button
        title="navigate to settings"
        onPress={() => navigate('Settings')}
      />
      <Button title="sign out" onPress={() => dispatch(removeCredentials())} />
      <Button
        title="change language"
        onPress={() => dispatch(setLang(lang === 'ar' ? 'en' : 'ar'))}
      />
      <Button
        title="change theme"
        onPress={() =>
          dispatch(
            setTheme(
              (theme === 'system' && scheme === 'dark') || theme === 'dark'
                ? 'light'
                : 'dark',
            ),
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
