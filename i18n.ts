import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {en} from './locales/en';
import {ar} from './locales/ar';

export const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
} as const;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',
});
