import {createListenerMiddleware} from '@reduxjs/toolkit';

import authSlice from './auth.slice';
import {authStorage} from './utils';

// Create the middleware instance and methods
export const authMiddleware = createListenerMiddleware();

// Add one or more listener entries that look for specific actions.
// They may contain any sync or async logic, similar to thunks.
authMiddleware.startListening({
  actionCreator: authSlice.actions.setCredentials,
  effect: async (action, listenerApi) => {
    if (action.payload !== null) {
      await authStorage.setToken(action.payload);
    }
  },
});
authMiddleware.startListening({
  actionCreator: authSlice.actions.removeCredentials,
  effect: async (action, listenerApi) => {
    await authStorage.removeToken();
  },
});
