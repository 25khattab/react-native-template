import {create} from 'zustand';
import i18next from 'i18next';
import {getLocales} from 'expo-localization';

import {getTheme, setTheme, ThemeType, getLang, setLang} from './utils';

import {createSelectors} from '@/utility';

interface LayoutState {
  lang: string;
  theme: ThemeType | null;
  RTL: boolean;
  setLanguage: (data: string) => Promise<void>;
  setTheme: (data: ThemeType) => Promise<void>;
  hydrate: () => Promise<void>;
}

const _useLayout = create<LayoutState>((set, get) => ({
  lang: 'en',
  theme: null,
  RTL: false,
  setLanguage: async (data) => {
    await setLang(data);
    await i18next.changeLanguage(data);
    set({lang: data, RTL: data === 'ar'});
  },
  setTheme: async (data) => {
    await setTheme(data);
    set({theme: data});
  },
  hydrate: async () => {
    try {
      console.log('getting layout data');
      const systemLanguage = getLocales()[0].languageCode;
      const theme = await getTheme();
      const lang = await getLang();
      if (theme === null) {
        get().setTheme('system');
      } else {
        get().setTheme(theme);
      }
      if (lang === null) {
        // TODO set system language as defualt usefull for auto detection
        get().setLanguage(systemLanguage);
      } else {
        get().setLanguage(lang);
      }
    } catch (e) {
      // catch error here
      // Maybe sign_out user!
    }
  },
}));

export const useLayout = createSelectors(_useLayout);

export const hydrateLayout = () => _useLayout.getState().hydrate();
