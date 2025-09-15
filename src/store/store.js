import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import dataReducer from './dataSlice';
import juegoReducer from './juegoSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  data: dataReducer,
  juego: juegoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        ignoredPaths: ['register'],
      },
    }),
});

export const persistor = persistStore(store);
