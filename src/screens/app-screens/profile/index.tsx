import { useNavigation} from '@react-navigation/native';
import {Button, StyleSheet} from 'react-native';

import {Text, ThemeSwitcher, View} from '@/components';
import {ExtendedThemeType} from '@/constants/colors';
import {SIZES} from '@/constants/spacing';
import {useLayout} from '@/features';
import { useSelectedTheme } from '@/hooks/use-selected-theme';

export const Profile = () => {
  const {navigate} = useNavigation();
  const {colors} = useSelectedTheme();
  const isRTL = useLayout((s) => s.RTL);
  const styles = generateStyles(isRTL, colors);
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title="navigate to home" onPress={() => navigate('Home')} />
      <ThemeSwitcher/>
    </View>
  );
};

const generateStyles = (isRTL: boolean, color: ExtendedThemeType['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: SIZES.medium,
      rowGap:SIZES.medium
    },
  });
