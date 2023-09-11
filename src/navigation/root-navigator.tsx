import {NavigationContainer} from '@react-navigation/native';
import {useCallback, useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AuthNavigator} from './auth-navigator';
import {AppNavigator} from './app-navigator';

import {useAuth, useLayout} from '@/features';
import {MyDarkTheme, MyLightTheme} from '@/constants/colors';
import {useSelectedTheme} from '@/hooks';

const Stack = createNativeStackNavigator();

export const Root = () => {
  const status = useAuth.use.status();
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  useEffect(() => {
    if (status !== 'idle') {
      hideSplash();
    }
  }, [hideSplash, status]);
  if (status === 'idle') {
    return null;
  }
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
  const {colors} = useSelectedTheme();
  const scheme = useColorScheme();
  const darkTheme = Boolean(
    (theme === 'system' && scheme === 'dark') || theme === 'dark',
  );
  if (theme === null) {
    return null;
  }
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.background,
        }}
      >
        <Root />
      </SafeAreaView>
      <StatusBar style={darkTheme ? 'light' : 'dark'} />
    </NavigationContainer>
  );
};
