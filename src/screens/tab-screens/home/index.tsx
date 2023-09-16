import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ExtendedThemeType} from '@/constants/colors';
import {SIZES} from '@/constants/spacing';
import {useAuth, useLayout} from '@/features';
import {Text, ThemeSwitcher, View} from '@/components';
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
    <SafeAreaView
      edges={['left', 'right', 'top']}
      style={{
        alignSelf: 'stretch',
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
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
      </View>
    </SafeAreaView>
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
