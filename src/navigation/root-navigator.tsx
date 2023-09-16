import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';
import {useCallback, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AppNavigator} from './app-navigator';
import {AuthNavigator} from './auth-navigator';

import {useAuth, useLayout} from '@/features';
import {useSelectedTheme} from '@/hooks';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

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
  const {colors, isDark} = useSelectedTheme();
  if (theme === null) {
    return null;
  }
  return (
    <NavigationContainer theme={{dark: isDark, colors}}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.background,
        }}
      >
        <BottomSheetModalProvider>
          <Root />
        </BottomSheetModalProvider>
      </SafeAreaView>
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </NavigationContainer>
  );
};
