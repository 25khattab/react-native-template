import {NavigationContainer} from '@react-navigation/native';
import {useCallback, useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';

import {AuthNavigator} from './auth-navigator';

import {useAuth, useLayout} from '@/features';
import {MyDarkTheme, MyLightTheme} from '@/constants/colors';
import { AppNavigator } from './app-navigator';

const Stack = createNativeStackNavigator();

export const Root = () => {
  const status = useAuth.use.status();
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  useEffect(() => {
    console.log(status);
    if (status !== 'idle') {
      hideSplash();
    }
  }, [hideSplash, status]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: 'none',
      }}
    >
      <Stack.Group>
        {status === 'signedOut' ? (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        ) : (
          <Stack.Screen name="App" component={AppNavigator} />
        )}
      </Stack.Group>
    </Stack.Navigator>
  );
};
export const RootNavigator = () => {
  const theme = useLayout((state) => state.theme);
  const scheme = useColorScheme();
  const darkTheme = Boolean(
    (theme === 'system' && scheme === 'dark') || theme === 'dark',
  );
  return (
    <NavigationContainer theme={darkTheme ? MyDarkTheme : MyLightTheme}>
      <Root />
    </NavigationContainer>
  );
};
