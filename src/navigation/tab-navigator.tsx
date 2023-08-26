import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useTheme, type RouteProp} from '@react-navigation/native';
import type {ComponentType} from 'react';

import {Settings, Home} from '@/screens/tab-screens';
import { useTranslation } from 'react-i18next';

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
  const {t}=useTranslation()
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.backgroundTertiary,
      })}
    >
      <Tab.Group
        screenOptions={{
          headerShown: false,
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
