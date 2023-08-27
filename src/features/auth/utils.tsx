import {getItem, removeItem, setItem} from '@/services/storage';

const TOKEN = 'token';

export type TokenType = {
  access: string;
  refresh: string;
};

export const getToken = () => getItem<TokenType>(TOKEN);
export const removeToken = () => removeItem(TOKEN);
export const setToken = (value: TokenType) => setItem<TokenType>(TOKEN, value);

export const authStorage = {
  getToken,
  removeToken,
  setToken,
};
