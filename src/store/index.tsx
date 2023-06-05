import { configureStore } from '@reduxjs/toolkit'

import asideReducer from './reducers/asideBar'

export const store = configureStore({
  reducer: {
    asideBar: asideReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
