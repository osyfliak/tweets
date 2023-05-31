import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from './user/userSlice';

const userPersistConfig = {
  key: 'user',
  storage,
};

export const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig,userReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, 'your/action/type'],
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],

        ignoredPaths: ['items.dates'],
      },
    }),
});

export const persistor = persistStore(store);
