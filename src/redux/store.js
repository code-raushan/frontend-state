import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'

import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './features/rtkAPI/auth'
import baseApi from './features/rtkAPI/base'

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, baseApi.middleware),
})

setupListeners(store.dispatch)