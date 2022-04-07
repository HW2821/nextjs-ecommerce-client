import { combineReducers, configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import userReducer from "./userSlice"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
}

const persistedUserReducer = persistReducer(persistConfig, userReducer)
const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)

export default store
