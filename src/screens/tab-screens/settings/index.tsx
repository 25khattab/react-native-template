import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Button, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Input, Text, View} from '@/components';
import {ExtendedThemeType} from '@/constants/colors';
import {useLayout} from '@/features';
import {useSelectedTheme, useSoftKeyboardEffect} from '@/hooks';

export const Settings = () => {
  const navigate = useNavigation();
  const {colors} = useSelectedTheme();
  const isRTL = useLayout((state) => state.RTL);
  const styles = generateStyles(isRTL, colors);
  const {t} = useTranslation();
  useSoftKeyboardEffect();
  return (
    <SafeAreaView
      edges={['left', 'right', 'top']}
      style={{
        alignSelf: 'stretch',
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          // backgroundColor: colors.backgroundTertiary,
        }}
        contentContainerStyle={{
          flexGrow: 1,
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          justifyContent: 'center',
          paddingHorizontal: 10,
          rowGap: 30,
          backgroundColor: colors.background,
        }}
      >
        <Text>{t('routes.Settings')}</Text>
        <Button
          title="navigate to Home"
          onPress={() => navigate.navigate('Home')}
        />
        <Button
          title="navigate to profile"
          onPress={() => navigate.navigate('Profile')}
        />
        <View
          style={{
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: 'red',
            rowGap: 30,
          }}
        >
          <Input
            style={{
              alignSelf: 'stretch',
              backgroundColor: 'white',
              borderColor: 'black',
              borderRadius: 10,
              borderWidth: 1,
              color: 'black',
              fontSize: 18,
              height: 60,

              padding: 10,
            }}
          />
          <Input
            style={{
              alignSelf: 'stretch',
              backgroundColor: 'white',
              borderColor: 'black',
              borderRadius: 10,
              borderWidth: 1,
              color: 'black',
              fontSize: 18,
              height: 60,
              padding: 10,
            }}
          />
          <Input
            style={{
              alignSelf: 'stretch',
              backgroundColor: 'white',
              borderColor: 'black',
              borderRadius: 10,
              borderWidth: 1,
              color: 'black',
              fontSize: 18,
              height: 60,

              padding: 10,
            }}
          />

          <Input
            style={{
              alignSelf: 'stretch',
              backgroundColor: 'white',
              borderColor: 'black',
              borderRadius: 10,
              borderWidth: 1,
              color: 'black',
              fontSize: 18,
              height: 60,

              padding: 10,
            }}
          />
          <Input
            style={{
              alignSelf: 'stretch',
              backgroundColor: 'white',
              borderColor: 'black',
              borderRadius: 10,
              borderWidth: 1,
              color: 'black',
              fontSize: 18,
              height: 60,

              padding: 10,
            }}
          />
          <Input
            style={{
              alignSelf: 'stretch',
              backgroundColor: 'white',
              borderColor: 'black',
              borderRadius: 10,
              borderWidth: 1,
              color: 'black',
              fontSize: 18,
              height: 60,

              padding: 10,
            }}
          />
          <Input
            style={{
              alignSelf: 'stretch',
              backgroundColor: 'white',
              borderColor: 'black',
              borderRadius: 10,
              borderWidth: 1,
              color: 'black',
              fontSize: 18,
              height: 60,

              padding: 10,
            }}
          />
          <Input
            style={{
              alignSelf: 'stretch',
              backgroundColor: 'white',
              borderColor: 'black',
              borderRadius: 10,
              borderWidth: 1,
              color: 'black',
              fontSize: 18,
              height: 60,

              padding: 10,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const generateStyles = (isRTL: boolean, colors: ExtendedThemeType['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });
