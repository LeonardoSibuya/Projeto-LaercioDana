import { createSlice } from '@reduxjs/toolkit'

type AsideState = {
  isOpen: boolean
}

const initialState: AsideState = {
  isOpen: false
}

const AsideSlice = createSlice({
  name: 'asideBar',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { close, open } = AsideSlice.actions

export default AsideSlice.reducer
