import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Button, StyleSheet} from 'react-native';

import {Input, Text, ThemeSwitcher, View} from '@/components';
import {ExtendedThemeType} from '@/constants/colors';
import {SIZES} from '@/constants/spacing';
import {useAuth, useLayout} from '@/features';
import {useSelectedTheme} from '@/hooks';

export const Home = () => {
  const {navigate} = useNavigation();
  const {colors} = useSelectedTheme();
  const isRTL = useLayout((state) => state.RTL);
  const styles = generateStyles(isRTL, colors);
  const signOut = useAuth((s) => s.signOut);
  const layout = useLayout();
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t('hello')} updated</Text>
      <Button
        title="navigate to settings"
        onPress={() => navigate('Settings')}
      />
      <Button title="sign out" onPress={() => signOut()} />
      <Button
        title="change language"
        onPress={() => layout.setLanguage(layout.lang === 'ar' ? 'en' : 'ar')}
      />
      <ThemeSwitcher />
      <View style={{alignSelf: 'stretch', flexDirection: 'row', gap: 20}}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
      </View>
      <Input />
    </View>
  );
};

const generateStyles = (isRTL: boolean, colors: ExtendedThemeType['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: SIZES.medium,
      rowGap: SIZES.large,
    },
  });
