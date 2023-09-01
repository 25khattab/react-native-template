import 'react-native-gesture-handler';
import 'i18n';
import {StyleSheet} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import {RootNavigator} from '@/navigation';
import {hydrateAuth, hydrateLayout, useLayout} from '@/features';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';


hydrateAuth();
hydrateLayout();
SplashScreen.preventAutoHideAsync();

export default function App() {
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
