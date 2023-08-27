import {createListenerMiddleware} from '@reduxjs/toolkit';
import i18next from 'i18next';

import layoutSlice, {setRTL} from './layout.slice';
import {layoutStorage} from './utils';

// Create the middleware instance and methods
export const layoutMiddleware = createListenerMiddleware();

// Add one or more listener entries that look for specific actions.
// They may contain any sync or async logic, similar to thunks.
layoutMiddleware.startListening({
  actionCreator: layoutSlice.actions.setLayoutState,
  effect: async (action, listenerApi) => {
    const lang = action.payload.lang;
    await layoutStorage.setLang(lang);
    await i18next.changeLanguage(lang);
    const theme = action.payload.theme;
    if (theme === null) {
      await layoutStorage.setTheme('system');
    } else {
      await layoutStorage.setTheme(theme);
    }
  },
});

layoutMiddleware.startListening({
  actionCreator: layoutSlice.actions.setLang,
  effect: async (action, listenerApi) => {
    const lang = action.payload;
    await layoutStorage.setLang(lang);
    await i18next.changeLanguage(lang);
    if (lang === 'ar') {
      listenerApi.dispatch(setRTL(true));
    } else {
      listenerApi.dispatch(setRTL(false));
    }
  },
});
layoutMiddleware.startListening({
  actionCreator: layoutSlice.actions.setTheme,
  effect: async (action, listenerApi) => {
    const theme = action.payload;
    if (theme === null) {
      await layoutStorage.setTheme('system');
    } else {
      await layoutStorage.setTheme(theme);
    }
  },
});
