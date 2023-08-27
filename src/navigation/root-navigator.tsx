import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';
import {getLocales} from 'expo-localization';

import {AuthNavigator} from './auth-navigator';
import {AppNavigator} from './app-navigator';

import {MyDarkTheme, MyLightTheme} from '@/constants/colors';
import {useAppDispatch, useAppSelector} from '@/hooks/redux-hooks';
import {authStorage, removeCredentials, setCredentials} from '@/features/auth';
import {layoutStorage, setLang, setTheme} from '@/features/layout';

const Stack = createNativeStackNavigator();

export const Root = () => {
  const status = useAppSelector((state) => state.auth.status);
  useEffect(() => {
    console.log(status);
    SplashScreen.hideAsync();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: 'none',
      }}
    >
      {status === 'signedOut' ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <Stack.Screen name="App" component={AppNavigator} />
      )}
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  const status = useAppSelector((state) => state.auth.status);
  const dispatch = useAppDispatch();
  const hydrateAuth = async () => {
    try {
      console.log('getting auth data');
      const userToken = await authStorage.getToken();
      if (userToken !== null) {
        dispatch(setCredentials(userToken));
      } else {
        dispatch(removeCredentials());
      }
    } catch (e) {
      // catch error here
      // Maybe sign_out user!
    }
  };
  const hydrateLayout = async () => {
    try {
      console.log('getting layout data');
      const systemLanguage = getLocales()[0].languageCode;
      const theme = await layoutStorage.getTheme();
      const lang = await layoutStorage.getLang();
      if (theme === null) {
        dispatch(setTheme('system'));
      } else {
        dispatch(setTheme(theme));
      }
      if (lang === null) {
        // TODO set system language as defualt usefull for auto detection
        dispatch(setLang(systemLanguage));
      } else {
        dispatch(setLang(lang));
      }
    } catch (e) {
      // catch error here
      // Maybe sign_out user!
    }
  };
  const theme = useAppSelector((state) => state.layout.theme);
  const scheme = useColorScheme();
  const darkTheme =
    (theme === 'system' && scheme === 'dark') || theme === 'dark';
  useEffect(() => {
    hydrateAuth();
    hydrateLayout();
  }, []);
  if (status === 'idle' || theme === null) {
    return null;
  }
  console.log(darkTheme);
  return (
    <NavigationContainer theme={darkTheme ? MyDarkTheme : MyLightTheme}>
      <Root />
    </NavigationContainer>
  );
};
