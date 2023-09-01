import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TabNavigator} from './tab-navigator';
import {
  // don't remove for generator (import)
  Profile,
} from '@/screens/app-screens';
import {useTranslation} from 'react-i18next';
import {IStackRouteType} from './types';

export type AppStackParamList = {
  // don't remove for generator (param)
  Tab: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const routes: Array<IStackRouteType<AppStackParamList> & {title: string}> = [
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

  return (
    <Stack.Navigator>
      {routes.map((route, index) => {
        return (
          <Stack.Screen
            key={route.name}
            options={{
              title: t(`routes.${route.title as keyof AppStackParamList}`),
              ...route.options,
            }}
            {...route}
          />
        );
      })}
    </Stack.Navigator>
  );
};
