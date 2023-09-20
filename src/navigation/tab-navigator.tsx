import {
  BottomTabHeaderProps,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {type RouteProp} from '@react-navigation/native';
import type {ComponentType} from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Settings, Home} from '@/screens/tab-screens';
import {useSelectedTheme} from '@/hooks/use-selected-theme';
import {Text, View} from '@/components';
import {BackArrowIcon} from '@/svgs';
import {useLayout} from '@/features';
import {SIZES} from '@/constants/spacing';

export type AppTabParamList = {
  // don't remove leave for generator (list)
  Home: undefined;
  Settings: undefined;
};

interface TabType {
  name: keyof AppTabParamList;
  component: ComponentType<any>;
  label: string;
}

const Tab = createBottomTabNavigator<AppTabParamList>();

// type TabIconsType = {
//   [key in keyof TabParamList]: (props: SvgProps) => JSX.Element;
// };
// const tabsIcons: TabIconsType = {
//   Style: (props: SvgProps) => <StyleIcon {...props} />,
//   FeedNavigator: (props: SvgProps) => <FeedIcon {...props} />,
//   Settings: (props: SvgProps) => <SettingsIcon {...props} />,
// };

export interface AppTabList<T extends keyof AppTabParamList> {
  navigation: BottomTabNavigationProp<AppTabParamList, T>;
  route: RouteProp<AppTabParamList, T>;
}

const tabs: TabType[] = [
  // don't remove leave for generator (tabs)
  {
    name: 'Home',
    component: Home,
    label: 'Home',
  },
  {
    name: 'Settings',
    component: Settings,
    label: 'Settings',
  },
];

// type BarIconType = {
//   name: keyof TabParamList;
//   color: string;
// };

// const BarIcon = ({ color, name, ...reset }: BarIconType) => {
//   const Icon = tabsIcons[name];
//   return <Icon color={color} {...reset} />;
// };

export const TabNavigator = () => {
  const {t} = useTranslation();
  const {colors} = useSelectedTheme();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.backgroundTertiary,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {backgroundColor: colors.background},
      })}
    >
      <Tab.Group
        screenOptions={{
          header: (props) => <TabHeader {...props} />,
        }}
      >
        {tabs.map(({name, component, label}) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              options={{
                title: t(`routes.${name}`),
              }}
            />
          );
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
};

const TabHeader = (props: BottomTabHeaderProps) => {
  const isRTL = useLayout((state) => state.RTL);
  const {isDark, colors} = useSelectedTheme();
  const styles = StyleSheet.create({});
  const canGoBack = props.navigation.canGoBack();
  const navigateBack = () => {
    props.navigation.goBack();
  };
  return (
    <SafeAreaView
      edges={['left', 'right', 'top']}
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
            accessibilityLabel="close modal"
            accessibilityRole="button"
            accessibilityHint="closes the modal"
          >
            <BackArrowIcon supportRTL={isRTL} color={colors.text} />
          </Pressable>
        )}
        <Text style={{fontSize: SIZES.xLarge, fontWeight: '800'}}>
          {props.options.title}
        </Text> 
    </SafeAreaView>
  );
};
