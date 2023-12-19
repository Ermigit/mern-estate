import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './user/userSlice.js'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReduer = combineReducers({
  user : userReducer
})

const persistConfig= {
  key: 'root',
  storage,
  version: 1,
}
const persistedReducer = persistReducer(persistConfig, rootReduer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
});

export const persistor = persistStore(store)

