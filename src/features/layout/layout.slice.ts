import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {ThemeType} from './utils';

export interface LayoutState {
  RTL: boolean;
  lang: string;
  theme: ThemeType | null;
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState: {RTL: false, lang: 'en', theme: null} as LayoutState,
  reducers: {
    setLayoutState: (
      state,
      {payload: {RTL, lang, theme}}: PayloadAction<LayoutState>,
    ) => {
      state.RTL = RTL;
      state.lang = lang;
      state.theme = theme;
    },
    setRTL: (state, {payload}: PayloadAction<boolean>) => {
      state.RTL = payload;
    },
    setLang: (state, {payload}: PayloadAction<string>) => {
      state.lang = payload;
    },
    setTheme: (state, {payload}: PayloadAction<LayoutState['theme']>) => {
      state.theme = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {setRTL, setLang, setLayoutState, setTheme} = layoutSlice.actions;
