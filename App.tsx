import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import * as SplashScreen from 'expo-splash-screen';
import './i18n';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {hydrateAuth, hydrateLayout} from '@/features';
import {RootNavigator} from '@/navigation';
import {APIProvider} from '@/services/api-provider';

hydrateAuth();
hydrateLayout();
SplashScreen.preventAutoHideAsync();

export default function App() {
  // async function onFetchUpdateAsync() {
  //   try {
  //     const update = await Updates.checkForUpdateAsync();

  //     if (update.isAvailable) {
  //       await Updates.fetchUpdateAsync();
  //       await Updates.reloadAsync();
  //     }
  //   } catch (error) {
  //     // You can also add an alert() to see the error message in case of an error when fetching updates.
  //     alert(`Error fetching latest Expo update: ${error}`);
  //   }
  // }
  // useEffect(() => {
  //   onFetchUpdateAsync();
  // }, []);
  return (
    <GestureHandlerRootView style={styles.container}>
      <APIProvider>
        <RootNavigator />
      </APIProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
