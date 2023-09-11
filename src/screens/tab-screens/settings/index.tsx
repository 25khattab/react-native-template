import {useNavigation} from '@react-navigation/native';
import {Button, ScrollView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import {Input, Text, View} from '@/components';
import {ExtendedThemeType} from '@/constants/colors';
import {SIZES} from '@/constants/spacing';
import {useLayout} from '@/features';
import {useSelectedTheme,useSoftKeyboardEffect} from '@/hooks';

export const Settings = () => {
  const navigate = useNavigation();
  const {colors} = useSelectedTheme();
  const isRTL = useLayout((state) => state.RTL);
  const styles = generateStyles(isRTL, colors);
  const {t} = useTranslation();
  useSoftKeyboardEffect()
  return (
    <ScrollView
      style={{flex: 1,
        backgroundColor:colors.background}}
      contentContainerStyle={{padding: SIZES.medium}}
    >
      <View style={{rowGap: 30, backgroundColor: colors.background}}>
        <Text>{t('routes.Settings')}</Text>
        <Button
          title="navigate to Home"
          onPress={() => navigate.navigate('Home')}
        />
        <Button
          title="navigate to profile"
          onPress={() => navigate.navigate('Profile')}
        />
        <Input />
        <Input />
        <Input />
      </View>
    </ScrollView>
  );
};

const generateStyles = (isRTL: boolean, colors: ExtendedThemeType['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });
