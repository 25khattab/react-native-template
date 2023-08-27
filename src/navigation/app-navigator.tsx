import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';

import {TabNavigator} from './tab-navigator';
import {IStackRouteType} from './types';

import {Profile} from '@/screens/app-screens';

export type AppStackParamList = {
  // don't remove for generator (list)
  Tab: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

// export interface AppTabList<T extends keyof AppStackParamList> {
//   navigation: NativeStackNavigationProp<AppStackParamList, T>;
//   route: RouteProp<AppStackParamList, T>;
// }

export const AppNavigator = () => {
  const {t} = useTranslation();
  const routes: IStackRouteType<AppStackParamList>[] = [
    // don't remove for generator (route)
    {
      name: 'Tab',
      component: TabNavigator,
      options: {title: t('routes.Tab'), headerShown: false},
    },
    {
      name: 'Profile',
      component: Profile,
      options: {title: t('routes.Profile')},
    },
  ];

  return (
    <Stack.Navigator>
      {routes.map((route, index) => {
        return <Stack.Screen key={route.name} {...route} />;
      })}
    </Stack.Navigator>
  );
};
