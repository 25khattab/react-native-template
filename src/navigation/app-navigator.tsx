import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {TabNavigator} from './tab-navigator';
import {ComponentType} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Profile} from '@/screens/app-screens';
import { useTranslation } from 'react-i18next';

export type AppStackParamList = {
  // don't remove for generator (list)
  Tab: undefined;
  Profile: undefined;
};

interface RouteType {
  name: keyof AppStackParamList;
  component: ComponentType<any>;
  label: string;
}

const Stack = createNativeStackNavigator<AppStackParamList>();

export interface AppTabList<T extends keyof AppStackParamList> {
  navigation: NativeStackNavigationProp<AppStackParamList, T>;
  route: RouteProp<AppStackParamList, T>;
}


export const AppNavigator = () => {
  const {t}=useTranslation()
  const routes: RouteType[] = [
    // don't remove for generator (route)
    {name: 'Tab', component: TabNavigator, label: t('routes.Tab')},
    {name: 'Profile', component: Profile, label: t('routes.Profile')},
  ];

  return (
    <Stack.Navigator>
      {routes.map(({name, component, label}) => {
        return (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={{title: label}}
          />
        );
      })}
    </Stack.Navigator>
  );
};
