import {ExpoConfig, ConfigContext} from 'expo/config';

const IS_DEV = process.env.APP_VARIANT === 'development';

export default ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  name: IS_DEV ? 'react-native-template (Dev)' : 'react-native-template',
  slug: 'react-native-template',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: IS_DEV
      ? 'com.khattab.reactnativetemplateDev'
      : 'com.khattab.reactnativetemplate',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: IS_DEV
      ? 'com.khattab.reactnativetemplateDev'
      : 'com.khattab.reactnativetemplate',
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    'expo-localization',
    [
      'expo-updates',
      {
        username: 'omar_khattab',
      },
    ],
  ],
  extra: {
    eas: {
      projectId: '06d43376-5ae0-4c67-a069-306f7e61e3a1',
    },
  },
  owner: 'omar_khattab',
  runtimeVersion: {
    policy: 'appVersion',
  },
  updates: {
    url: 'https://u.expo.dev/06d43376-5ae0-4c67-a069-306f7e61e3a1',
  },
});
