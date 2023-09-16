import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import { TabNavigator } from './tab-navigator';
import { IStackRouteType } from './types';

import { Text, View } from '@/components';
import { SIZES } from '@/constants/spacing';
import { useLayout } from '@/features';
import { useSelectedTheme } from '@/hooks/use-selected-theme';
import {
  Profile,
} from '@/screens/app-screens';
import { BackArrowIcon } from '@/svgs';
import { Pressable, StyleSheet } from 'react-native';

export type AppStackParamList = {
  // don't remove for generator (param)
  Tab: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const routes: (IStackRouteType<AppStackParamList> & {title: string})[] = [
  // don't remove for generator (route)
  {
    name: 'Tab',
    component: TabNavigator,
    title: 'Tab',
    options: {headerShown: false},
  },
  {
    name: 'Profile',
    component: Profile,
    title: 'Profile',
  },
];

export const AppNavigator = () => {
  const {t} = useTranslation();
  const {colors} = useSelectedTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <AppNavigatorHeader {...props} />,
      }}
    >
      {routes.map((route, index) => {
        return (
          <Stack.Screen
            key={route.name}
            options={{
              title: t(`routes.${route.title as keyof AppStackParamList}`),
              headerStyle: {backgroundColor: colors.background},
              ...route.options,
            }}
            {...route}
          />
        );
      })}
    </Stack.Navigator>
  );
};

const AppNavigatorHeader = (props: NativeStackHeaderProps) => {
  const isRTL = useLayout((state) => state.RTL);
  const {isDark, colors} = useSelectedTheme();
  const styles = StyleSheet.create({});
  const canGoBack = props.navigation.canGoBack();
  const navigateBack = () => {
    props.navigation.goBack();
  };
  return (
    <View
      style={{
        backgroundColor: colors.background,
        flexDirection: isRTL ? 'row-reverse' : 'row',
        paddingVertical: SIZES.medium,
        paddingHorizontal: SIZES.xSmall,
        borderBottomWidth: 1,
        borderColor: colors.border,
        columnGap: SIZES.xSmall,
        alignItems: 'center',
      }}
    >
      {canGoBack && (
        <Pressable
          onPress={navigateBack}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
        >
          <BackArrowIcon supportRTL={isRTL} color={colors.text} />
        </Pressable>
      )}

      <Text style={{fontSize: SIZES.xLarge, fontWeight: '800'}}>
        {props.options.title}
      </Text>
    </View>
  );
};
