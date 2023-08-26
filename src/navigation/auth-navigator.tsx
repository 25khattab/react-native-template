import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '@/screens/auth-screens';
import { ComponentType } from 'react';
import { useTranslation } from 'react-i18next';

export type AuthStackParamList = {
  // don't remove for generator
  Login: undefined;
};
interface RouteType {
  name: keyof AuthStackParamList;
  component: ComponentType<any>;
  label: string;
}
const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  const {t}=useTranslation()
  const routes: RouteType[] = [
    // don't remove for generator (route)
    {name: 'Login', component: Login, label: t('routes.Login')},
  ];
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
