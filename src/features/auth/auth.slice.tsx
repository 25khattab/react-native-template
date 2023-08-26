import {create} from 'zustand';

import type {TokenType} from './utils';
import {getToken, removeToken, setToken} from './utils';

import {createSelectors} from '@/utility';

interface AuthState {
  token: TokenType | null;
  status: 'idle' | 'signedOut' | 'loggedIn';
  signIn: (data: TokenType) => Promise<void>;
  signOut: () => Promise<void>;
  hydrate: () => Promise<void>;
}

const _useAuth = create<AuthState>((set, get) => ({
  status: 'idle',
  token: null,
  signIn: async (token) => {
    setToken(token);
    set({status: 'loggedIn', token});
  },
  signOut: async () => {
    removeToken();
    set({status: 'signedOut', token: null});
  },
  hydrate: async () => {
    try {
      console.log('getting auth data');
      const userToken = await getToken();
      if (userToken !== null) {
        get().signIn(userToken);
      } else {
        get().signOut();
      }
    } catch (error) {
      // catch error here
      // Maybe sign_out user!
    }
  },
}));

export const useAuth = createSelectors(_useAuth);

export const signOut = () => _useAuth.getState().signOut();
export const signIn = (token: TokenType) => _useAuth.getState().signIn(token);
export const hydrateAuth = () => _useAuth.getState().hydrate();
