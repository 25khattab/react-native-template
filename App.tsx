import 'react-native-gesture-handler';
import 'i18n';
import {StyleSheet,StatusBar} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RootNavigator} from '@/navigation';
import {hydrateAuth, hydrateLayout} from '@/features';

hydrateAuth();
hydrateLayout();
SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.container}>
        <RootNavigator />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
