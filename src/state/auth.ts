import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialized: false,
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})
