import 'react-native-gesture-handler';
import 'i18n';
import * as SplashScreen from 'expo-splash-screen';
import {Provider} from 'react-redux';
import {store} from 'store';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

import {RootNavigator} from '@/navigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
