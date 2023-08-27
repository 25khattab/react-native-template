import {authMiddleware} from '@/features/auth';
import authSlice from '@/features/auth/auth.slice';
import {layoutMiddleware} from '@/features/layout';
import layoutSlice from '@/features/layout/layout.slice';
import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    layout: layoutSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(layoutMiddleware.middleware)
      .concat(authMiddleware.middleware),
});
setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
