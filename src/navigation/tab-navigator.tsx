import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useTheme, type RouteProp} from '@react-navigation/native';
import type {ComponentType} from 'react';

import {Settings, Home} from '@/screens/tab-screens';

export type AppTabParamList = {
  Home: undefined;
  Settings: undefined;
};

interface TabType {
  name: keyof AppTabParamList;
  component: ComponentType<any>;
  label: string;
}

// type TabIconsType = {
//   [key in keyof TabParamList]: (props: SvgProps) => JSX.Element;
// };

const Tab = createBottomTabNavigator<AppTabParamList>();

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
                title: label,
                tabBarTestID: `${name}-tab`,
              }}
            />
          );
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
};
