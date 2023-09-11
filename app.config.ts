import {ExpoConfig, ConfigContext} from 'expo/config';

import {ClientEnv, Env} from './env';

export default ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  name: Env.NAME,
  description: `${Env.NAME} Mobile App`,
  owner: Env.EXPO_ACCOUNT_OWNER,
  slug: 'react-native-template',
  version: Env.VERSION.toString(),
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
    bundleIdentifier: Env.BUNDLE_ID,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    softwareKeyboardLayoutMode: 'resize',
    package: Env.PACKAGE,
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    'expo-localization',
    [
      'expo-updates',
      {
        username: Env.EXPO_ACCOUNT_OWNER,
      },
    ],
    [
      'expo-build-properties',
      {
        android: {
          kotlinVersion: '1.7.22', // <-- add a version here for resolution, version can be newer depending on the Expo SDK version used in the project
        },
      },
    ],
  ],
  extra: {
    ...ClientEnv,
    eas: {
      projectId: Env.EAS_PROJECT_ID,
    },
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
  updates: {
    url: `https://u.expo.dev/${Env.EAS_PROJECT_ID}`,
  },
});
