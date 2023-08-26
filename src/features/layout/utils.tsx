import {getItem, removeItem, setItem} from '@/services/storage';

export type ThemeType = 'dark' | 'light' | 'system';

const THEME = 'theme';
const LANG = 'lang';

export const getTheme = () => getItem<ThemeType>(THEME);
export const removeTheme = () => removeItem(THEME);
export const setTheme = (value: ThemeType) => setItem<ThemeType>(THEME, value);
export const getLang = () => getItem<string>(LANG);
export const removeLang = () => removeItem(LANG);
export const setLang = (value: string) => setItem<string>(LANG, value);
