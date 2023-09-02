import {GestureHandlerRootView} from 'react-native-gesture-handler';
import 'i18n';
import {StyleSheet} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import * as Updates from 'expo-updates';

import {RootNavigator} from '@/navigation';
import {hydrateAuth, hydrateLayout, useLayout} from '@/features';
import { useEffect } from 'react';

hydrateAuth();
hydrateLayout();
SplashScreen.preventAutoHideAsync();

export default function App() {
  async function onFetchUpdateAsync() {
    try {
     
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }
  useEffect(()=>{
    onFetchUpdateAsync()
  },[])
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <RootNavigator />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
