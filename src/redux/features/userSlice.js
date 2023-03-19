import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  token: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    logout: (state) => {
      state.user = {}
      state.token = null
    },
  },
})

export const { setUser, setToken, logout } = userSlice.actions

export default userSlice.reducer