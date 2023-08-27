import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '@/screens/auth-screens';
import {useTranslation} from 'react-i18next';
import { IStackRouteType } from './types';

export type AuthStackParamList = {
  // don't remove for generator
  Login: undefined;
};
const Stack = createNativeStackNavigator<AuthStackParamList>();
const routes: Array<IStackRouteType<AuthStackParamList> & {title: string}> = [
  // don't remove for generator (route)
  {name: 'Login', component: Login, title: 'Login'},
];
export const AuthNavigator = () => {
  const {t} = useTranslation();
  
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
       {routes.map((route, index) => {
        return (
          <Stack.Screen
            key={route.name}
            options={{
              title: t(`routes.${route.title as keyof AuthStackParamList}`),
              ...route.options,
            }}
            {...route}
          />
        );
      })}
    </Stack.Navigator>
  );
};
