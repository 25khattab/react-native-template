import {getItem, removeItem, setItem} from '@/services/storage';

export type ThemeType = 'dark' | 'light' | 'system';

const THEME = 'theme';
const LANG = 'lang';

const getTheme = () => getItem<ThemeType>(THEME);
const removeTheme = () => removeItem(THEME);
const setTheme = (value: ThemeType) => setItem<ThemeType>(THEME, value);
const getLang = () => getItem<string>(LANG);
const removeLang = () => removeItem(LANG);
const setLang = (value: string) => setItem<string>(LANG, value);

export const layoutStorage = {
  getTheme,
  removeLang,
  removeTheme,
  setTheme,
  getLang,
  setLang,
};
