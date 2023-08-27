import {useNavigation, useTheme} from '@react-navigation/native';
import {Button, StyleSheet, useColorScheme} from 'react-native';

import Text from '@/components/core/Text';
import View from '@/components/core/View';
import {ExtendedThemeType} from '@/constants/colors';
import {SIZES} from '@/constants/spacing';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { removeCredentials } from '@/features/auth';
import { setLang, setTheme } from '@/features/layout';

export const Home = () => {
  const {navigate} = useNavigation();
  const {colors} = useTheme();
  const isRTL = useAppSelector((s) => s.layout.RTL);
  const dispatch = useAppDispatch()
  const styles = generateStyles(isRTL, colors);
  const scheme = useColorScheme()
  const lang = useAppSelector((s)=>s.layout.lang)
  const theme = useAppSelector((s)=>s.layout.theme)
  const {t}=useTranslation()
  return (
    <View style={styles.container}>
      <Text>{t("hello")}</Text>
      <Button
        title="navigate to settings"
        onPress={() => navigate('Settings')}
      />
       <Button
        title="sign out"
        onPress={() => dispatch(removeCredentials())}
      />
       <Button
        title="change language"
        onPress={() => dispatch(setLang(lang==="ar"?"en":"ar"))}
      />
       <Button
        title="change theme"
        onPress={() => dispatch(setTheme(theme === 'system' && scheme === 'dark' ||theme === 'dark' ?"light":"dark"))}
      />
    </View>
  );
};

const generateStyles = (isRTL: boolean, color: ExtendedThemeType['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: SIZES.medium,
      rowGap:SIZES.large
    },
  });
